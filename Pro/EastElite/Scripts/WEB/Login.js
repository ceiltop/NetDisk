﻿$(function () {
    $(".la-logo-sel div").click(function () {
        $(".la-logo-sel div").removeClass("stu-active").removeClass('tea-active').removeClass('pro-active');

        if ($(this).hasClass("la-logo-sel-stu")) {
            $(this).addClass('stu-active');
        }
        if ($(this).hasClass("la-logo-sel-pro")) {
            $(this).addClass('pro-active');
        }
        if ($(this).hasClass("la-logo-sel-tea")) {
            $(this).addClass('tea-active');
        }
        var UserType=$(this).attr("id");
        switch (UserType) {
            case "T":
                $("#inputUserType").val("1");
                break;
            case "S":
                $("#inputUserType").val("2");
                break;
            case "P":
                $("#inputUserType").val("3");
                break;
            default:
                break;
        }
    });
})
function submitLogin() {
    var usercode = $.toString($('#inputUserCode').val());
    var userType = $.toString($("#inputUserType").val());
    var password = $.toString($('#inputPassword').val());
    if (usercode == "") {
        alert("姓名或代码不能为空！");
        return false;
    }
    if (userType == "") {
        alert("请选择用户类型！");
        return false;

    }
    if (password == "") {
        alert("密码不能为空！");
        return false;

    }
}