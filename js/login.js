$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault(); // 阻止表单默认提交行为

        var username = $("#username").val();
        var password = $("#password").val();

        // 这里假设学号是纯数字，你可以根据实际学号规则调整验证逻辑
        if (username!== "f24015341") {
            alert("请输入正确的学号");
            return;
        }

        if (password!== "123456") {
            alert("密码不正确，请输入正确的密码");
            return;
        }

        // 假设这里登录成功后跳转到homePage.html，可以根据实际后端接口情况调整
        window.location.href = "index.html";
    });
});