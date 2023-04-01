

// show giỏ hàng
const showCart = () => {
    let content = '';
    cartArr.map((product) => {
        let quantyti = 1;
        let totle = 0;
        content += `
          <tr class="align-items-center">
            <td class="img"><img src="${product.img}" alt=""></td>
            <td class="name">${product.name}</td>
            <td class="price">${product.price}</td>
            <td><input type="number" value="1" class="quantyti"></td>
            <td>${quantyti * product.price}</td>
            <td><i class="fa-solid fa-trash" onclick="delCart(${product.id})"></i></td>   
          </tr>
        `
        totle += quantyti*product.price;
        document.querySelector('.txtTotle').innerHTML = totle
    })
    document.querySelector('.show__cart').innerHTML = content;
    // document.querySelector('.txtTotle').innerHTML = totle

}

// lấy sản phẩm từ localStorage
function getLocalStorage() {
    if (localStorage.getItem("Cart") != null) {
        cartArr = JSON.parse(localStorage.getItem("Cart"));
        showCart(cartArr)
    }
}
getLocalStorage();
// thanh toán
const btnPay = document.querySelector('.pay')
btnPay.addEventListener('click', () => {
    if (localStorage.getItem("Cart") != null) {
        alert("thanh toán thành công");
        localStorage.removeItem("Cart");
        location.reload();
    } else {
        alert("Không có sản phẩm trong giỏ hàng");
    }
})

const finIndex = () => {
    let cart = JSON.parse(localStorage.getItem("Cart"));
    var indexFind = -1;
    indexFind = cart.finIndex((id)=> {
        
    })
}
//! del Product chưa xóa được
const delCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("Cart"));
    if (confirm("Bạn muốn xóa sản phẩm")) {
        cart.splice(id, 1);
    }
}


// show số lượng sản phẩm lên icon
const showQuantity = () => {
    if (localStorage.getItem('Cart') != null) {
        cart = JSON.parse(localStorage.getItem("Cart"));
        document.querySelector('.txtQuantyti').innerHTML = cart.length;
    } else {

        document.querySelector('.txtQuantyti').innerHTML = 0;
    }
}
showQuantity()