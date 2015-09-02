function LockMainPage() {
}

function UnLockMainPage() {
}

function AjaxPostAction(url, params, onSuccess, onFail, triggerButton) {
    LockMainPage();
    $.ajax({
        type: "POST",
        async: false,
        dataType: 'JSON',
        url: url,
        data: params,
        success: function (data) {
            if (data.IsSuccess) {
                $.messager.popup(data.Message);
                if (onSuccess) {
                    onSuccess.call();
                }
            }
            else {
                $.messager.alert(data.Message);
                if (onFail) {
                    onFail.call(this, triggerButton);
                }
            }
            UnLockMainPage();
        },
        error: function (xmlHttpRequest, texStatus, errorThrown) {
            alert(errorThrown);
            UnLockMainPage();
        }
    });
}

function AjaxPutAction(url, params, onSuccess, onFail, triggerButton) {
    AjaxAction("PUT", url, params, onSuccess, onFail, triggerButton);
}

function AjaxGetAction(url, params, onSuccess, onFail, triggerButton) {
    AjaxAction("GET", url, params, onSuccess, onFail, triggerButton);
}

function AjaxAction(type, url, params, onSuccess, onFail, triggerButton) {
    LockMainPage();
    $.ajax({
        type: type,
        async: false,
        dataType: 'JSON',
        url: url,
        data: params,
        success: function (data) {
            if (data.IsSuccess) {
                $.messager.popup(data.Message);
                if (onSuccess) {
                    onSuccess.call(this, data.Obj);
                }
            }
            else {
                $.messager.alert(data.Message);
                if (onFail) {
                    onFail.call(this, triggerButton);
                }
            }
            UnLockMainPage();
        },
        error: function (xmlHttpRequest, texStatus, errorThrown) {
            alert(errorThrown);
            UnLockMainPage();
        }
    });
}