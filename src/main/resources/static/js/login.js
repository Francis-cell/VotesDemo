// $(document).ready(function () {
//     $('.loginBtn').on("click", function (event) {
//         event.preventDefault();
//
//         var username = $('input[name="username"]').val();
//         var password = $('input[name="password"]').val();
//
//         $.ajax({
//             type: 'POST',
//             url: '/user/login',
//             contentType: 'application/json',
//             data: JSON.stringify({ "username": username, "password": password }),
//             success: function (response) {
//                 // Here I don't use 'window.location.href' to redirect page. Replace this way with code in Spring Security.
//                 // window.location.href = './html/index.html';
//                 console.log("成功！");
//             },
//             error: function (response) {
//                 // login failed.
//                 // window.location.href = '../html/index.html';
//                 console.log("失败！");
//                 console.log("response:", response);
//             }
//         });
//     });
// });