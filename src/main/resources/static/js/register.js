$(document).ready(function () {
    $(document).ready(function () {
        $('form.login').submit(function (event) {
            event.preventDefault();

            var username = $('input[name="username"]').val();
            var userAccount = $('input[name="userAccount"]').val();
            var password = $('input[name="password"]').val();
            var email = $('input[name="email"]').val();
            var sex = $('#sex').val();

            $.ajax({
                type: 'POST',
                url: '/user/register',
                contentType: 'application/json',
                data: JSON.stringify(
                    {
                        "userName": username,
                        "userAccount": userAccount,
                        "password": password,
                        "email": email,
                        "sex": sex === "boy" ? "1" : "0"
                    }),
                success: function (response) {
                    // 判断返回的数据是否注册成功
                    if (response.code === 200) {
                        // 注册成功，执行页面跳转
                        window.location.href = '/myLogin';
                    } else {
                        // 注册失败，处理错误信息
                        console.error('Registration failed. Message: ' + response.message);
                    }
                },
                error: function (error) {
                    // register failed
                    alert('Register failed!');
                }
            });
        });
    });

});