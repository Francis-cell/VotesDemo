$(document).ready(function () {
    $(document).ready(function () {
        $('form.login').submit(function (event) {
            event.preventDefault();

            var username = $('input[name="username"]').val();
            var userAccount = $('input[name="userAccount"]').val();
            var password = $('input[name="password"]').val();
            var email = $('input[name="email"]').val();

            $.ajax({
                type: 'POST',
                url: '/user/register',
                contentType: 'application/json',
                data: JSON.stringify(
                    {
                        "userName": username,
                        "userAccount": userAccount,
                        "password": password,
                        "email": email
                    }),
                success: function (response) {
                    // alert(response.message);
                    window.location.href = 'index.html';
                },
                error: function (error) {
                    // register failed
                    alert('Register failed!');
                }
            });
        });
    });

});