document.addEventListener("DOMContentLoaded", function () {
    // Chọn các phần tử cho giá và số lượng
    const products = [
        {
            name: "LADY DIOR BAG",
            quantity: 2,
            price: 164.00
        },
        {
            name: "Super Potent Serum",
            quantity: 1,
            price: 66.00
        }
    ];

    // Hàm tính tổng chi phí
    function calculateTotal(products) {
        let total = 0;
        products.forEach(product => {
            total += product.quantity * product.price;
        });
        return total.toFixed(2);
    }

    // Hiển thị tổng chi phí lên HTML
    function displayTotal() {
        const totalPaymentElement = document.querySelector('.total-payment');
        const total = calculateTotal(products);
        totalPaymentElement.textContent = `$${total}`;
    }

    // Hiển thị tổng ban đầu
    displayTotal();
});
// PHẦN ĐĂNG KÝ ĐĂNG NHẬP
const admin = [
    {
        email: 'admin@gmail.com',
        password: '12345678'
    }
];
localStorage.setItem('admin', JSON.stringify(admin));

// Lấy phần tử cần thiết
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('dior-lg');
const dangnhapBtns = document.querySelectorAll('.Dangnhap');
const overlay2 = document.getElementById('overlay');
const incluLsandsg = document.querySelector('.inclu-lsandsg');
const nameInput = document.getElementById('nameInput'); // Lấy input Name
const dangNhapLi = document.querySelectorAll('.Dangnhap'); // Lấy tất cả các li có class Dangnhap
const logoutBtn = document.querySelector('.Dangxuat'); // Lấy nút Logout
const loginForm = document.querySelector('.login-container form'); // Lấy form login
const loginEmailInput = document.querySelector('.login-container input[type="email"]'); // Lấy input email login
const loginPasswordInput = document.querySelector('.login-container input[type="password"]'); // Lấy input password login

// Biến này dùng để nhận biết user đã login hay chưa. Nếu chưa là false
var userStatus = false;


document.addEventListener('DOMContentLoaded', function () {
    const savedName = localStorage.getItem('userName');
    const registered = localStorage.getItem('isRegistered'); 

    if (savedName && registered === 'true') {
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`;
            } else {
                li.style.display = 'none';
            }
        });
      
        logoutBtn.style.display = 'block';
        userStatus = true;
    } else {
      
        logoutBtn.style.display = 'none';
    }

   
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    if (savedEmail && savedPassword) {
        loginEmailInput.value = savedEmail;
        loginPasswordInput.value = savedPassword;
    }
});


registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
dangnhapBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
    });
});
overlay2.addEventListener('click', function () {
    overlay2.style.display = 'none';
    incluLsandsg.style.display = 'none';
    container.classList.remove("right-panel-active");
});
const registerForm = document.querySelector('.register-container form');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields to sign in.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
       
        alert('This email is already registered. Please use a different email.');
        return;
    }
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    users.push({
        id: newId,
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration Successful!');

    dangNhapLi.forEach((li, index) => {
        if (index === 0) {  
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${name}`;
        } else {
            li.style.display = 'none'; 
        }
    });

    logoutBtn.style.display = 'block';
    userStatus = true; 

    overlay2.style.display = 'none';
    incluLsandsg.style.display = 'none';

    registerForm.reset();
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    const savedAdmin = JSON.parse(localStorage.getItem('admin'));

    if (email === savedAdmin[0].email && password === savedAdmin[0].password) {
        alert('Admin Login Successful!');
        window.location.href = '../homeAdmin/homeAdmin.html'; 
        return; 
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('User Login Successful!');
        logoutBtn.style.display = 'block';
        userStatus = true; 

        const savedName = user.name;
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`;
            } else {
                li.style.display = 'none';
            }
        });

        overlay2.style.display = 'none';
        incluLsandsg.style.display = 'none';
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

logoutBtn.addEventListener('click', function () {

    userStatus = false;

    dangNhapLi.forEach(li => {
        li.style.display = 'block';
        if (li.innerHTML.includes('fa-user-large')) {
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> Log in`;
        }
    });

    logoutBtn.style.display = 'none';
});

function handleCart() {
    if (userStatus) {
        openCart(); 
    } else {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        cartContainer.style.display = 'none'; 
    }
}

function handleChatbox() {
    if (userStatus) {
        container_chat.style.display = 'flex';
        chatBubble.style.display = 'none'; 
    } else {
       
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        container_chat.style.display = 'none'; 
        chatBubble.style.display = 'flex'; 
    }
}
chatBubble.addEventListener('click', handleChatbox);


//PHẦN ICON THÔNG BÁO
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block";
    } else {
        notificationBox.style.display = "none";
    }
}
function hideNotification() {
    var notificationContent = document.getElementById("ok");
    notificationContent.textContent = "Bạn đã đặt hàng thành công!";
    var notificationBox = document.getElementById("notificationBox");
    notificationBox.style.display = "none";
}
function Order(){
    alert("You have placed your order successfully")
}
