const users = [
    {
        id: 1,
        name: 'Tran Cong Doan',
        email: 'congdoan0806@gmail.com',
        password: '12345678'
    },
    {
        id: 2,
        name: 'Le Gia Toan',
        email: 'toanle112@gmail.com',
        password: '987654321'
    }
];

// Nếu localStorage chưa có 'users', lưu danh sách người dùng mặc định
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Hiển thị số lượng người dùng hiện tại
function quantityUser(){
    var users = JSON.parse(localStorage.getItem("users"));
    var quantity = users.length;
    document.getElementById('diplayNumber').innerHTML = "The current number of users is: "+ quantity;
}
quantityUser();

// Hiển thị danh sách người dùng trong bảng
function showUsers() {
    var users = JSON.parse(localStorage.getItem("users")) || [];  // Lấy danh sách người dùng

    if (users.length > 0) {
        var tableContent = '';  

        users.forEach(user => {
            var row = "<tr style='border-bottom: 1px solid black;height:50px; background-color: #faeef0;'>";
            row += "<td style='padding-left: 90px;'>" + user.id + "</td>";
            row += "<td style='padding-left: 50px;'>" + user.name + "</td>";
            row += "<td style='padding-left: 50px;'>" + user.email + "</td>";
            row += "<td style='padding-left: 90px;'>" + user.password + "</td>";
            row += "<td style='padding-left: 70px;'>" +
                "<button class='btn btn-danger' id='btn-delete' onclick='openFormRemove(\"" + user.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        });

        document.getElementById('content_table_user').innerHTML = tableContent; // Cập nhật bảng hiển thị
    } else {
        console.log("No users found in localStorage.");
    }
}
showUsers();

// Hàm để xử lý đăng ký (từ trang Sign in)
function registerNewUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Tạo ID mới cho người dùng, dựa vào ID cuối cùng trong danh sách
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    // Thêm người dùng mới vào danh sách
    users.push({ id: newId, name: name, email: email, password: password });

    // Lưu danh sách người dùng mới vào localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Cập nhật lại bảng Users Management sau khi thêm người dùng mới
    showUsers();
    quantityUser();  // Cập nhật lại số lượng người dùng
}

// Hàm xử lý xóa người dùng
var id_item;
function openFormRemove(id){
    document.getElementById('formRemove').style.display = 'block';
    id_item = id;
}

function removeUser(){
    var users = JSON.parse(localStorage.getItem("users"));
    
    const newUsers = users.filter(function(user){
        return String(user.id) !== String(id_item);
    });
    localStorage.setItem("users", JSON.stringify(newUsers));   
    location.reload();
}

function closeFormRemove(){
    document.getElementById('formRemove').style.display = 'none';
}

// Các hàm điều hướng trang
function openProduct(){
    window.location.href = '../homeAdmin/homeAdmin.html';
}
function openConfirmation(){
    window.location.href = '../Order_Confirm/order_1.html';
}
function openChart(){
    window.location.href = '../Chart/chart.html';
}