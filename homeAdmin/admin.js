const products = [
    {
        id: 1,
        name: 'MISS DIOR',
        title: 'Eau de parfum - floral and fresh notes',
        price: 125.00,
        description: 'Miss Dior Eau de Parfum reinvents itself with a new scent.In 1947, Miss Dior was born out of a wild impetus where the pressing desire to re-enchant the lives of women and open up their eyes, once again, to the sparkling colours of love was felt. Following a bleak period, at that time this scent was synonymous with renewed happiness, poetry, and harmony for Christian Dior. Miss Dior intrigues, excites and invites us to marvel at love and all the beauty in the world.Echoing its inspiring character, the new Miss Dior fragrance is like an olfactory "millefiori". Centifolia Rose, with its honeyed and peppery notes, reigns over a delectably creamy velvet heart. It is embroidered with fresh Lily-of-the-Valley notes, an apricot-tinged Peony accord, and powdery Iris notes. Miss Dior is thus built around an elegant, striking bouquet-like a "millefiori" that seems to carry countless flowers in endless colours. At the base, slight notes of tender wood envelop the composition.The couturiers fragrance, Miss Dior eau de parfum, is adorned with a new poignard fabric bow-a few centimeters of pure luxury is tied around the bottles neck. The new Miss Dior Eau de Parfum now boasts a vibrant, pointillist haute couture bow, with a truly unique assortment of florals. Beneath the bottle, the emblematic Miss Dior houndstooth motif is engraved in the glass',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEBUQERAPDw8QFRAQEBYREBAPDg8OFRUWGBcSFRYYHSggGBolGxYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzIfICUwLS8tLS0tMy4rNSs3LS0tKy0tLS4tLS0tLS0tMC0rLS0tLS0tLS01LTUtLS0tLS0tLf/AABEIAPQAzgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EAEMQAAIBAgMFBAYGBwcFAAAAAAABAgMRBBIhBTFBUYEiYXGRBhMyocHRQlJTsdLwI2KCkrPD8TNUcnODsuEUFjRDov/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAQEAAgEEAQQDAQAAAAAAAAABAhEDBBIhMVETIkFxgaHxMv/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADDklvaV9F3vkZI2OpRlG0oxlG+6STXkyrrbNm/7HE1sNa11D1dWLWtko1VJR/ZSI8i9uYuUUNnYlb8fXf+jhV91M2xwdf+91X/p0Pwjd+E6XFxcq44ar/eJv9il+E9epqfbT/dp/IbvwaWVxcrfUz+2qeVP8I9TP7ap5U/wjd+DSzBFwea7vKUt1r5dN/JIlEoAAAAAAAAAAAAAAAAAAAAAGnFbl4mik9/T4m7F7upHpcenxJg2gxcEiDia6c8reislfdf8AqbaErO3B+SfNEXGUO073yy/P3m3CU9b69Xf87zzscsvrfz/TosnYm3MMGD0XO9Uqijmb7uu8gYva9RXyxikud22yRiI7u/5lVisPZS1d+CSvd8iotNn4+rKGepGmo84t38iyhJNXW5nPULKgld34p6Fpsetmg19VgTwAAAAAAAAAAAAAAAAABoxe7qR6XHp8SRi/Z6kalx6fEmDaYNM69qkaeSbzRlLMlenHLbsyfBu+ngbQElcJEbFyadOzavOMXZ6NNPR+RJIlm0/hgAFkNOJhJwbjZuNm09ezxscntjH1YLNN51qlGEqlKKas03KMszunzt3HcYXj0OT9LcLFKa4JZ1ra1rfGfuOfm7p5laYavisQnV0jfNn0UXeTi+6Td/O51ezsN6umo/S3y8Sr2Nh068pfZxjFd0pat7uRfDh7rN2oz16gADZQAAAAAAAAAAAAAAABoxfs9SNS49PiScZ7PUi0uPT4kwQsViakcTTppr1dSnXk1lWZThks07/rbu4m0nJQTqOOZRvNrSN0tX4Fbjf/ADcN/l4v+UaMRWdRRUZ1HDETlTUmo5MjjK2WN76OK149TO5a2vJvSbiMRm9U8skpVItOSSurS79OpPIc6FSXq75F6uUZNqUu1ZNaabtTTCtKVF1lJqV81nuik/Ya5295Ey1bs1uJcsVFNrW6aTtGWje6/uNxCblGNSo1bMoyW55bKzuvebaMZJrt3Tjubu2/rImZ3flFxT8Jx6HM+l71m+VKqv4TOmwnHocn6U1Lqtu0pz8m5r+WV5fScPa92JL9JVX+XL/5LcodkStiGvr04PyL4cN+0z9gANVAAAAAAAAAAAAAAAAGjGez1ItLj0+JKxns9fmRKXHp8SYIOJpuWMoyW6lTrufdncFHzyvyZJjs+itFTgle+7RPu5dDfGCV7K13d975s9Eds/KdsJHh0Y3vlje99y38/E2GCdIDzGmluSXgkj0BobaErKTe5avoji/SGfYxD3uNKEX3NRnN/wAVHW1ZdhrjOUY9N79yZxG3qt6OLnrZyrqOunYVOl98GY8ntfF0WDqWrUZfWjlZ0xxrm/V056rLbe9TrsPUzRUuaXmRxX3DJsABsoAAAAAAAAAAAAAAAAj4z2epFpcenxJWM9nr8yLS49PiTBsAPMpJK73Ej0YNSxEdNXq7LR7/AIGFiY8pfusDcDzCd1fXqrM8YmvGnCVSXswi5SsruyV9FxI9DVWqJScm+zTi5Pxt8kfPtoVH/wBBOUrZpUfWtXXtVZubXvLnH7ap1cJWUJVlUq3puMqbpSWd2dpTjbRNvRvREH0nw8lgcRK7cVCEVK6lGytbVcLnJ3zLzG9xuPtcYObnQS4JI6L0fxGanle+P3fn7zldhOUqK7Tay93yJOzNoqhOU6krU46yvuy8dy1e7TuKzPtylO3csdsDCfHgZOxgAAAAAAAAAAAAAAAAj4z2V4/Mi0uPT4kvGez1+ZEpcegGwAFgAAGCi9L8Raiqf2klf/BHW3V2L45Hb1X1uKVP6MLR8tZfBdDk6zPt4rPlv02O89/CTsXC5aevK78WbKmz6U4vNTi1K99LXT52JkI2p+P9D3k7J5kx9frbpud3tW0tmZYtwqVorl66q0l4ORSYrDuFRVNZSjxk3N5Xo468GtGjtMNC8Gu5lBjaV0y3JjrHG/KePPdu1z6EY31mEUG7zw0p4aV3d2pvsN97pum+pfnE+hVbJiKlPhWgpd3rKdl5uMl0pnbHp9Pn38crk58e3O6AAbsQAAAAAAAAAAAABoxns9fmRKXHoS8Z7PUi0uPQD2DIAwZAA81JpJye6Kbfglc4vZqc68qj73+1J3Oq2vO1Co/1WvPT4lDsmjZPm3r9x53XXzI6+m8S1czj2UvD5m7J+jb8BWjuNv8A62ubRnMdZX9Ita8Poimxa7TLpLQq8fDiU5v+Ivx37lJg6jp4ulJcKkU/8Mrwl7pN9D6KfNNptqSkt6aZ9IoVM0Yy+slLzVzq6K+LFeqnqvYAO5yAAAAAAAAAAAAADRi/Z6kWlx6EvFbupFp8egHsA14m+RuLs7aOyevVEW6myeW0GmUmnHW6lo72T3XurLuPcaqfFX0vvdna9vIiZROkbbC/Qy/Z/wByKrZi0Xe/iW+0Vmoytyv5NMqtmao4erm85XTw37Kt6q1RnKZiuZtUSZj3W1W3TTKOhXY6Ohc5VYrMfHRmfNh4Thl5cntFXlGPOUV7z6Jgo2pwXKMV7kcBWjetHu1Z9CoRtGK5JL3F+hnmrdVfEewAeg5AAAAAAAAAAAAABpxXs3e5avw5miKJpXVKVSDtCCnD6PacXBa9nc720t3Pu1i3SW0xUjdW58jXF1fs/ev+D1lqfU/2/iK90v8Aho9Ur5tW0mlfgnvt5LyMqC7/AD7rfcYUav1Lfu/iPSp1OUfz1G58DM6acXB7mnF+DVjlsN6yhJwnCU1G6zQ1bS4uPhyOqVKp+qQ9oRdO1aVkotJyvpHk5abuF+Bjy4TPX400wz7fCPhdq0ZaZ0nyej8mWEK8H9JGipQw2IVqtKnNrR3SbT7mtUVdf0GwstYVcZRXKniZ5fKea3QrjjnPWqtvC+9xcVsXTW+SRR7S23Ss1F55buzrqb8N6H4ODvKNWu+derOov3dI+4lYidGirRhTg1uSil5JFOTHKzzqL49svjdc7sfBVa2Ii5wcKd1J5r5pxWtrcty6nflfsnDySdSf9pPn9GPBFgb8HH2YsuXPuoADdkAAAAAAAAAAAAAAAAAAAAAB5nBNNNJppppq6ae9NHoAcp/2dKlLNg8XUwyu3klCNek0/o2bTt1v3lrhqGNUbTqYWb11jTqw04aOT1LYGc4sZ6XvJlfakxWBx0tI4jD048bUJzn0bnb3GvZnoyqdRVatepiakU0nNRjG7trZeC7i/BH0cN7vlP1ctaAAaswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z',
        type: 'perfume',
        gender: 'Woman',
        category: 'Miss Dior'
    }
];


if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
}
// hamf hien thi so luon sp
function showQuantity(){
    var quantities = JSON.parse(localStorage.getItem('products'));
    var qtyLength = quantities.length;
    document.getElementById('qty').innerHTML = 'Quantities: '+ qtyLength;
}
showQuantity()
// function thêm sản phẩm
function addProduct() {
    var name = document.getElementById('name').value;
    var title = document.getElementById('title').value;
    var price = document.getElementById('price').value;
    var description = document.getElementById('comments').value;
    var category = document.getElementById('category').value;

    if (!name || !title || !price || !description || !category) {
        alert("Vui lòng điền tất cả các trường!");
        return;
    }

    // Xử lý hình ảnh
    var fileInput = document.getElementById('file-input');
    var image;
    if (fileInput.files.length > 0) {
        var reader = new FileReader();
        reader.onload = function (e) {
            image = e.target.result;
            // Thêm sản phẩm sau khi đọc xong hình ảnh
            saveProduct(name, title, price, description, image, category);
            
        };
        reader.readAsDataURL(fileInput.files[0]);
        alert('Success')
        document.getElementById('productsModal').style.display = 'none';
    } else {
        alert("Vui lòng chọn một hình ảnh!");
    }
}
// lưu thông tin
function saveProduct(name, title, price, description, image, category) {
    var products = JSON.parse(localStorage.getItem("products"));
    var newProduct = {
        id: products.length + 1,
        name: name,
        title: title,
        price: parseFloat(price),
        description: description,
        image: image,
        type: document.querySelector('input[name="product"]:checked').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        capacity: document.querySelector('input[name="capacity"]:checked').value,
        color: document.querySelector('input[name="color"]:checked').value,
        category: category
    };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    
    location.reload()
    
    
}
var productss = JSON.parse(localStorage.getItem("products"));
console.log("Store: ",productss)
// Mở thêm sanr phẩm
function openAddProduct() {
    document.getElementById('productsModal').style.display = 'block';
}
// Dong them san pham
function closeAddproduct(){
    document.getElementById('productsModal').style.display = 'none';
}
// Hiển thị sản phẩm
function showProducts() {
    var products = JSON.parse(localStorage.getItem("products"));

    if (products && products.length > 0) {
        var tableContent = '';  

        for (var i of products) {
            var row = "<tr  style = 'border-bottom: 1px solid black; background-color: #faeef0;'>";
            row += "<td style='padding-left: 90px;font-family: 'Kaisei Tokumin';'>" + i.id + "</td>";
            row += "<td style='padding-left: 50px;font-family: 'Kaisei Tokumin';'>" + i.name + "</td>";
            row += "<td style='padding-left: 60px;font-family: 'Kaisei Tokumin';'><img src='" + i.image + "' alt='Product Image' width='100' height='100;'></td>";
            row += "<td style='padding-left: 90px;'> $" + i.price + "</td>";
            row += "<td style='padding-left: 70px; font-family: Kaisei Tokumin; '>" +
            "<button id = 'btn-edit' class='btn btn-success' onclick='updateData(\"" + i.id + "\")'>Edit</button> " +
            "<button style='font-family: Kaisei Tokumin;' id = 'btn-delete' class='btn btn-danger' onclick='openFormRemove(\"" + i.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        }
        document.getElementById('content_table').innerHTML = tableContent;
    } else {
        console.log("No products found in localStorage.");
    }
}
showProducts();
// hamf mo form xoa SP
var id_item;
function openFormRemove(id){
    document.getElementById('formRemove').style.display = 'block';
    id_item = id;
}
function closeFormRemove(){
    document.getElementById('formRemove').style.display = 'none';
}
// Hàm mở form xac nhạn update
function openFormUpdate(){
    document.getElementById('formUpdate').style.display = 'block';
    id_item = id;
}
function closeFormUpdate(){
    document.getElementById('formUpdate').style.display = 'none';
    document.getElementById('update_pro').style.display = 'none';
    
    
}


// Hàm xóa sản phẩm
function removeData(){
    var products = JSON.parse(localStorage.getItem("products"));
    
    const newProducts = products.filter(function(product){
        return String(product.id) !== String(id_item);
    });
    localStorage.setItem("products", JSON.stringify(newProducts));
    console.log(products)
    location.reload()
    
}

// Hiển thị dử liệu cần up date
var idUpdate;
function updateData(id) {
    idUpdate = id;
    document.getElementById('update_pro').style.display = 'block';
    var products = JSON.parse(localStorage.getItem("products"));
    if (!products) {
        console.error("No products found in localStorage.");
        return;
    }
    var product = products.find(function(product) {
        return String(product.id) === String(id);
    });
    if (!product) {
        console.error("Product not found with id:", id);
        return;
    }
    document.getElementById("name_update").value = product.name || '';							
    document.getElementById("title_update").value = product.title || '';							
    document.getElementById("price_update").value = product.price || '';	
    document.getElementById("comments_update").value = product.description || '';	
    document.getElementById("image").value = product.image || '';	

    const radioButton = document.querySelector(`input[name="product_update"][value="${product.type}"]`);
    if (radioButton) {
        radioButton.checked = true;
    }
    const genderRadioButton = document.querySelector(`input[name="gender_update"][value="${product.gender}"]`);
    if (genderRadioButton) {
        genderRadioButton.checked = true;
    }
    console.log("capa: ", product.capacity)
    console.log("color: ", product.color)
    const capacityUpdate = document.querySelector(`input[name="capacity"][value="${product.capacity}"]`);
    if (capacityUpdate) {
        capacityUpdate.checked = true;
    }
    
    const colorUpdate = document.querySelector(`input[name="color"][value="${product.color}"]`);
    if (colorUpdate) {
        colorUpdate.checked = true;
    }
    document.getElementById("category_update").value = product.category || '';
  
}
// hàm thực hiện update, xóa sản phẩm cũ
function createUpdate(){
    var products = JSON.parse(localStorage.getItem("products"));
    const updateProduct = {
        id: idUpdate,
        name: document.getElementById("name_update").value,
        title: document.getElementById("title_update").value,
        price: parseFloat(document.getElementById("price_update").value),
        description: document.getElementById("comments_update").value,
        image:document.getElementById('image').value,
        type: document.querySelector('input[name="product_update"]:checked').value,
        gender: document.querySelector('input[name="gender_update"]:checked').value,
        capacity: document.querySelector('input[name="capacity"]:checked').value,
        color: document.querySelector('input[name="color"]:checked').value,
        category: document.getElementById("category_update").value
    }
    var replace = products.filter(function(re_product){
        return String(re_product.id) !== String(idUpdate);
    })
    replace.push(updateProduct);
    localStorage.setItem("products", JSON.stringify(replace));
    
    location.reload();
    document.getElementById('update_pro').style.display = 'none';
    console.log("Product updated:", updatedProducts);
    
    
}

// var productss = JSON.parse(localStorage.getItem("products"));
// console.log("Store: ", productss)
function openUser(){
    window.location.href = '../User_managerment/adminUser.html';
}
function openConfirmation(){
    window.location.href = '../Order_Confirm/order_1.html';
}
function openChart(){
    window.location.href = '../Chart/chart.html';
}
// Phan tim kiem
var product = JSON.parse(localStorage.getItem("products"));
const searchInput = document.getElementById('header-input');
const results = document.getElementById('results');
        // Thêm sự kiện click cho toàn bộ document
document.addEventListener('click', function(event) {
        // Kiểm tra nếu click không nằm trong ul và ô input
    if (!results.contains(event.target) && event.target.id !== 'header-input') {
        results.style.display = 'none';
    }
});
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Xóa kết quả trước đó
    results.style.display = 'block';
    const filteredData = product.filter(item => item.name.toLowerCase().includes(query));
    console.log(filteredData)
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', function() {
            searchInput.value = item.name; // Đặt giá trị ô input thành tên sản phẩm
            results.innerHTML = ''; // Xóa kết quả sau khi chọn
        });
        results.appendChild(li);
    });
});
function searchProduct(){
    var dataInput  = document.getElementById('header-input').value;
    var result = product.filter(function(item){
        return item.name == dataInput;
    });
    
    if(!result){
        alert("Not found");
    }else{
        showFind(result);
    }
}
function showFind(arr) {
    if (arr && arr.length > 0) {
        var tableContent = '';  

        for (var i of arr) {
            var row = "<tr  style = 'border-bottom: 1px solid black; background-color: #faeef0;'>";
            row += "<td style='padding-left: 90px;font-family: 'Kaisei Tokumin';'>" + i.id + "</td>";
            row += "<td style='padding-left: 50px;font-family: 'Kaisei Tokumin';'>" + i.name + "</td>";
            row += "<td style='padding-left: 60px;font-family: 'Kaisei Tokumin';'><img src='" + i.image + "' alt='Product Image' width='100' height='100;'></td>";
            row += "<td style='padding-left: 90px;'> $" + i.price + "</td>";
            row += "<td style='padding-left: 70px; font-family: Kaisei Tokumin; '>" +
            "<button id = 'btn-edit' class='btn btn-success' onclick='updateData(\"" + i.id + "\")'>Edit</button> " +
            "<button style='font-family: Kaisei Tokumin;' id = 'btn-delete' class='btn btn-danger' onclick='openFormRemove(\"" + i.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        }
        document.getElementById('content_table').innerHTML = tableContent;
    } else {
        console.log("No products found in localStorage.");
    }
}





						
						


