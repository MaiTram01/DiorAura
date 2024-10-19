// HÀM RENDER SẢN PHẨM
function renderProducts(cardList, elementId) {
    let div = cardList.map(p =>
        `<div class='course-item'>
            <img src='${p.image}' alt='${p.name}'/>
            <h3>${p.name}</h3>
            <p>${p.content}</p>
            <h5 class="price">From: <span class="price-value">${p.price}</span></h5>
            <a href="#" class="more-info">></a>
        </div>`
    ).join("");
    document.getElementById(elementId).innerHTML = div;
}
// Danh sách sản phẩm 1
let cardList1 = [
    { id: 1, image: "./Image/sp1.jpg", name: "MISS DIOR", content: "Eau de parfum - floral and fresh notes ", price: "$125.00" },
    { id: 2, image: "./Image/sp2.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Eau de toilette", price: "$164.00" },
    { id: 3, image: "./Image/sp3.jpg", name: "MISS DIOR ABSOLUTELY BLOOMING", content: "Eau de parfum", price: "$125.00" }
];

// Danh sách sản phẩm 2
let cardList2 = [
    { id: 1, image: "./Image/sp4.jpg", name: "SAUVAGE", content: "Eau de Parfum", price: "$145.00" },
    { id: 2, image: "./Image/sp5.jpg", name: "SAUVAGE", content: "Elixir", price: "$230.00" },
    { id: 3, image: "./Image/sp6.jpg", name: "SAUVAGE", content: "Eau de toilette ", price: "$107.00" }
];

// Danh sách sản phẩm 3
let cardList3 = [
    { id: 1, image: "./Image/sp7.jpg", name: "ROUGE DIOR FOREVER LIPSTICK", content: "Transfer-proof lipstick pigmented matte-bare-lip feel comfort", price: "$66.00" },
    { id: 2, image: "./Image/sp8.jpg", name: "ROUGE DIOR FOREVER LIQUID", content: "Transfer-proof*liquid lipstick - ultra- pigmented matte- weightless", price: "$64.00" },
    { id: 3, image: "./Image/sp9.jpg", name: "DIOR FOREVER SKIN GLOW", content: "Clean Radiant Foundation - 24 Wear and Hydration", price: "$99.00" }
];

// Danh sách sản phẩm 4
let cardList4 = [
    { id: 1, image: "./Image/sp10.jpg", name: "DIOR PRESTIGE LE BAUME DE MINUIT", content: "Intensive Revitalizing Night Cream", price: "From $895.00" },
    { id: 2, image: "./Image/sp11.jpg", name: "DIOR PRESTIGE", content: "La Micro-Huile de Rose Advanced Serum", price: "From $238.00" },
    { id: 3, image: "./Image/sp12.jpg", name: "DIOR PRESTIGE LA CRÈME", content: "Anti-Aging Intensive Repairing Cream", price: "From $569.00" },
];

// Render sản phẩm
let cardList5 = [
    { id: 1, image: "./Image/sp13.jpg", name: "GRIS DIOR", content: "Unisex eau de parfum - chypre notes", price: "From $235.00" },
    { id: 2, image: "./Image/sp14.jpg", name: "DIORIVIER", content: "Eau de Parfum - Fig and Rose Notes", price: "From $235.00" },
    { id: 3, image: "./Image/sp15.jpg", name: "OUD ISPAHAN", content: "Oriental Fragrance", price: "From $235.00" },
];

// sản phẩm 6
let cardList6 = [
    { id: 1, image: "./Image/sp16.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Collector's Bottle", price: "From $1,240.00" },
    { id: 2, image: "./Image/sp17.jpg", name: "LES ADORABLES SET", content: "Shimmering Scurb, Body Cream and Shimmering Gel", price: "From $437.00" },
    { id: 3, image: "./Image/sp18.jpg", name: "MISS DIOR ROSE N'ROSES", content: "Eau de toilette", price: "From $156.00" },
]
//sản phẩm 7
let cardList7 = [
    { id: 1, image: "./Image/sp19.jpg", name: "COMPLIMENTARY SHIPPING", content: "For orders over $90.00", price: "From $1,500.00" },
    { id: 2, image: "./Image/sp20.jpg", name: "PERSONALISED GIFT CARD", content: "MESSAGE", price: "From $1,120.000" },
    { id: 3, image: "./Image/sp21.jpg", name: "RECEIVE 2 COMPLIMENTARY SAMPLES", content: "On all orders", price: "From $240.00" },
];


// Gọi hàm render với các danh sách khác nhau
renderProducts(cardList1, 'product-Discover');
renderProducts(cardList2, 'product-DiscoverOne');
renderProducts(cardList3, 'product-DiscoverTwo');
renderProducts(cardList4, 'product-DiscoverThree');
renderProducts(cardList5, 'product-DiscoverFour');
renderProducts(cardList6, 'product-DiscoverFive');
renderProducts(cardList7, 'product-DiscoverSix');


// PHẦN CHATBOX
const chats = {
    "chat1": {
        name: "Mai Tram",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "How much perfume you sell?", time: "10:35" },
            { sender: "me", text: "Hi!", time: "10:36" },
            { sender: "friend", text: "I want to know more details.", time: "10:37" }
        ],
        unread: 0
    },
    "chat2": {
        name: "Cong Doan",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hello, excuse me!!!", time: "11:59" },
            { sender: "me", text: "Hello!", time: "12:00" },
            { sender: "friend", text: "Can you help me with something?", time: "12:01" },
            { sender: "friend", text: "I'm interested in your products.", time: "12:02" }
        ],
        unread: 2
    },
    "chat3": {
        name: "Mai Mai",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Surprised", time: "00:00" },
            { sender: "me", text: "Is everything okay?", time: "00:01" },
            { sender: "friend", text: "Yes, just wanted to say hi!", time: "00:02" },
            { sender: "friend", text: "Hope you're doing well.", time: "00:03" },
            { sender: "friend", text: "Talk later!", time: "00:04" }
        ],
        unread: 3
    },
    "chat4": {
        name: "Cute",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hello", time: "00:00" },
            { sender: "me", text: "Are you okay?", time: "00:01" },
            { sender: "friend", text: "Yes, I'm fine", time: "00:02" },
            { sender: "friend", text: "Hehe", time: "00:03" },
            { sender: "friend", text: "Good luck", time: "00:04" }
        ],
        unread: 0
    },
    "chat5": {
        name: "Love",
        image: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
        messages: [
            { sender: "friend", text: "Hi", time: "00:00" },
            { sender: "me", text: "What are you doing?", time: "00:01" },
            { sender: "friend", text: "oh,...", time: "00:02" },
            { sender: "friend", text: "About you?", time: "00:03" },
            { sender: "friend", text: "Play game", time: "00:04" }
        ],
        unread: 0
    }
    // Thêm các cuộc trò chuyện khác nếu cần
};
// PHẦN CHATBOX
// Lấy các phần tử HTML bằng ID
const chatBubble = document.getElementById('chatBubble');
const container_chat = document.getElementById('container_chat');
const closeChat = document.getElementById('closeChat');
const sendMessageBtn = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
const chatHeaderName = document.getElementById('chatHeaderName');
const chatHeaderImage = document.getElementById('chatHeaderImage');
const chatList = document.getElementById('chatList');
let currentChatId = null;

// PHẦN CHATBOX
// Hàm lấy thời gian hiện tại ở định dạng HH:MM
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
}

//PHẦN CHATBOX
// Hàm hiển thị các tin nhắn trong chatBox
function displayMessages(chatId) {
    const chat = chats[chatId];
    if (!chat) return;

    chatHeaderName.innerHTML = `${chat.name} <br><span>online</span>`;
    chatHeaderImage.src = chat.image;


    chatBox.innerHTML = '';
    chat.messages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        if (msg.sender === 'me') {
            messageElement.classList.add('my_message');
        } else {
            messageElement.classList.add('frnd_message');
        }

        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${msg.text}<br><span>${msg.time}</span>`;

        messageElement.appendChild(messageParagraph);
        chatBox.appendChild(messageElement);
    });
    chatBox.scrollTop = chatBox.scrollHeight;
}
//PHẦN CHATBOX
function handleChatBlockClick(event) {
    const block = event.currentTarget;
    const chatId = block.getAttribute('data-chat-id');

    if (currentChatId === chatId) return; 


    document.querySelectorAll('.chatlist .block').forEach(b => b.classList.remove('active'));


    block.classList.add('active');


    currentChatId = chatId;


    displayMessages(chatId);

    const unreadBadge = block.querySelector('b');
    if (unreadBadge) {
        chats[chatId].unread = 0;
        unreadBadge.remove();
    }
    const p = block.querySelector('.message_p p');
    const p1 = block.querySelector('.time');
    if (p) {
        p.style.fontWeight = 'normal';
        p.style.color = 'rgb(170, 170, 170)';
    }
    if (p1) {
        p1.style.fontWeight = 'normal';
        p1.style.color = 'rgb(17, 17, 17)';
    }
}
//PHẦN CHATBOX
document.querySelectorAll('.chatlist .block').forEach(block => {
    block.addEventListener('click', handleChatBlockClick);
});
//PHẦN CHATBOX

const firstChatBlock = document.querySelector('.chatlist .block');
chatBubble.addEventListener('click', () => {
    container_chat.style.display = 'flex';
    chatBubble.style.display = 'none';
    if (firstChatBlock) {
        firstChatBlock.style.display = 'flex';
        firstChatBlock.click();
    }
});
closeChat.addEventListener('click', () => {
    container_chat.style.display = 'none';
    chatBubble.style.display = 'flex';
});

sendMessageBtn.addEventListener('click', () => {
    if (!currentChatId) {
        alert("Please select a chat first!");
        return;
    }

    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const currentTime = getCurrentTime();
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'my_message');
        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${messageText}<br><span>${currentTime}</span>`;
        messageElement.appendChild(messageParagraph);
        chatBox.appendChild(messageElement);
        chats[currentChatId].messages.push({
            sender: 'me',
            text: messageText,
            time: currentTime
        });
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = '';
    }
});
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageBtn.click();
    }
});

const searchInput = document.getElementById('search-input');
const chatBlocks = document.querySelectorAll('.block'); 

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase();
        chatBlocks.forEach(chatBlock => {
            chatBlock.style.display = 'flex'; 
        });
        let found = false;
        chatBlocks.forEach(chatBlock => {
            const title = chatBlock.querySelector('h4').textContent.toLowerCase(); 
            if (title.includes(searchTerm)) {
                found = true;
            } else {
                chatBlock.style.display = 'none'; 
            }
        });

        if (!found) {
            alert('Không tìm thấy chat nào phù hợp.');
        }
        searchInput.value = '';
    }
});
const attachIcon = document.getElementById('attachIcon');
const fileInput = document.getElementById('fileInput');
function sendImage(file) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const imageDataUrl = event.target.result;
        const currentTime = getCurrentTime();
        const message = {
            sender: 'me',
            type: 'image',
            content: imageDataUrl,
            time: currentTime
        };
        if (currentChatId) {
            chats[currentChatId].messages.push(message);
        }

        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'my_message');

        const messageContent = document.createElement('p');
        if (message.type === 'image') {
            const img = document.createElement('img');
            img.src = message.content;
            img.alt = 'Sent Image';
            img.style.maxWidth = '200px';
            img.style.borderRadius = '10px';
            messageContent.appendChild(img);
        } else {
            messageContent.innerHTML = `${message.text}<br><span>${message.time}</span>`;
        }
        if (message.type !== 'image') {
            const timeSpan = document.createElement('span');
            timeSpan.textContent = message.time;
            messageContent.appendChild(timeSpan);
        }

        messageElement.appendChild(messageContent);
        chatBox.appendChild(messageElement);

        chatBox.scrollTop = chatBox.scrollHeight;
    };

    reader.readAsDataURL(file);
}
attachIcon.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        sendImage(file);
    } else {
        alert('Please select a valid image file.');
    }
    fileInput.value = '';
});

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


// PHẦN GIỎ HÀNG
function closeCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = 'none';
    overlay.style.display = 'none';
}
function openCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = 'block';
}
let cart = [
    { id: 1, name: 'Miss Dior', description: 'Eau de parfum - floral and fresh notes - 100ml', price: 825, quantity: 1, img: 'https://th.bing.com/th/id/OIP.BnnCxFUCOhaNiI_6YUXUugHaHa?rs=1&pid=ImgDetMain', selected: false },
    { id: 2, name: 'Sauvage Dior', description: 'Eau de parfum - floral and fresh notes - 100ml', price: 825, quantity: 1, img: 'https://th.bing.com/th/id/OIP.BnnCxFUCOhaNiI_6YUXUugHaHa?rs=1&pid=ImgDetMain', selected: false },
    { id: 3, name: 'Limit Dior', description: 'Eau de parfum - floral and fresh notes - 100ml', price: 825, quantity: 1, img: 'https://th.bing.com/th/id/OIP.BnnCxFUCOhaNiI_6YUXUugHaHa?rs=1&pid=ImgDetMain', selected: false }
];
function renderCart() {
    const cartContainer = document.getElementById('cart-products');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const productHTML = `
        <div class="cart-product" data-id="${item.id}">
            <input type="checkbox" class="select-product" data-id="${item.id}" ${item.selected ? 'checked' : ''}>
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-product-info">
                <div class="cart-product-info-left">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
                <div class="cart-price-actions">
                    <div class="price-basket">$${item.price.toFixed(2)}</div>
                    <div class="cart-actions">
                        <button class="quantity-decrease">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-increase">+</button>
                        <span class="edit-btn">&#9998;</span>
                        <span class="delete-btn">&#128465;</span>
                    </div>
                </div>
            </div>
        </div>
    `;
        cartContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    updateTotal();
}
function updateTotal() {
    const totalItems = document.getElementById('total-items');
    const totalProducts = document.getElementById('total-products');
    const totalPrice = document.getElementById('total-price');

    let totalQuantity = 0;
    let totalCost = 0;

    cart.forEach(item => {
        if (item.selected) {
            totalQuantity += item.quantity;
            totalCost += item.price * item.quantity;
        }
    });

    totalItems.textContent = totalQuantity;
    totalProducts.textContent = totalQuantity;
    totalPrice.textContent = `$${totalCost.toFixed(2)}`;
}
function deleteProduct(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}
function changeQuantity(productId, delta) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += delta;
        if (product.quantity < 1) product.quantity = 1;
        renderCart();
    }
}
document.addEventListener('click', function (e) {
    const target = e.target;
    const cartProductElement = target.closest('.cart-product');

    if (cartProductElement) {
        const productId = parseInt(cartProductElement.dataset.id);

        if (target.classList.contains('delete-btn')) {
            deleteProduct(productId);
        }

        if (target.classList.contains('quantity-decrease')) {
            changeQuantity(productId, -1);
        }

        if (target.classList.contains('quantity-increase')) {
            changeQuantity(productId, 1);
        }

        if (target.classList.contains('select-product')) {
            const product = cart.find(item => item.id === productId);
            if (product) {
                product.selected = target.checked;
                updateTotal();
            }
        }
    }
});
document.getElementById('select-all').addEventListener('change', function (e) {
    const isChecked = e.target.checked;
    cart.forEach(item => {
        item.selected = isChecked;
    });
    renderCart();
});
renderCart();
function renderProducts(cardList, elementId) {
    let div = cardList.map(p =>
        `<div class='course-item'>
    <img src='${p.image}' alt='${p.name}'/>
    <h3>${p.name}</h3>
    <p>${p.content}</p>
    <h5 class="price-basket">From: <span class="price-value">${p.price}</span></h5>
    <a href="#" class="more-info">></a>
</div>`
    ).join("");
    document.getElementById(elementId).innerHTML = div;
}
function search() {
    const query = document.getElementById('header-input').value;
    console.log('Searching for:', query);
}
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartContainer = document.querySelector('.cart-container'); 
const overlay = document.querySelector('.overlay');

cartIcon.addEventListener('click', function () {
    cartContainer.style.display = 'block'; 
    overlay.style.display = 'block'; 
});

overlay.addEventListener('click', function () {
    cartContainer.style.display = 'none'; 
    overlay.style.display = 'none';
});


// PHẦN HOT SEARCH
 function search() {
    const query = document.getElementById('header-input').value; 
    const searchUrl = `search-result.html?q=${encodeURIComponent(query)}`; 
    window.location.href = searchUrl; 
}
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('search').style.display = 'block'; 
}
function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('search').style.display = 'none'; 
}

const headerInput = document.getElementById('header-input');
headerInput.addEventListener('focus', showOverlay);
headerInput.addEventListener('click', showOverlay);

const overlay1 = document.getElementById('overlay');
overlay1.addEventListener('click', hideOverlay);

document.addEventListener('DOMContentLoaded', function() {
    hideOverlay();
});


// PHẦN ĐĂNG KÝ ĐĂNG NHẬP
// Khởi tạo thông tin admin
const admin = [
    {
        email: 'admin@gmail.com',
        password: '12345678'
    }
];
localStorage.setItem('admin', JSON.stringify(admin));


const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('dior-lg');
const dangnhapBtns = document.querySelectorAll('.Dangnhap');
const overlay2 = document.getElementById('overlay');
const incluLsandsg = document.querySelector('.inclu-lsandsg');
const nameInput = document.getElementById('nameInput'); 
const dangNhapLi = document.querySelectorAll('.Dangnhap'); 
const logoutBtn = document.querySelector('.Dangxuat'); 
const loginForm = document.querySelector('.login-container form'); 
const loginEmailInput = document.querySelector('.login-container input[type="email"]');
const loginPasswordInput = document.querySelector('.login-container input[type="password"]'); 


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

  
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    const registered = localStorage.getItem('isRegistered'); 

    if (email === savedEmail && password === savedPassword && registered === 'true') {
        alert('User Login Successful!');
        logoutBtn.style.display = 'block';
        const savedName = localStorage.getItem('userName');
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
    dangNhapLi.forEach(li => {
        li.style.display = 'block';
        if (li.innerHTML.includes('fa-user-large')) {
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> Log in`;
        }
    });
    logoutBtn.style.display = 'none';
});
