const productser = new ProductServices();
function showProduct(arrayData) {
    let content = '';
    arrayData.map(function (product) {
        content += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card card__product">
            <img src="${product.img}" alt="">
            <div class="card__body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h3 class="card__product__title">${product.name}</h3>
                        <p class="card__product__text">${product.desc}</p>
                    </div>
                    <div>
                        <h3 class="card__product__title">${product.price}</h3>
                    </div>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="card__products__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <div>
                        <button class="btnBuyProduct" type="button" onclick="addCart(${product.id})"><i class="fa fa-shopping-cart"></i>Buy now</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
        `
    })
    document.querySelector('.showProducts').innerHTML = content;
}

// show list sản phẩm
const showProductList = () => {
    let axiosResult = productser.getProductList();
    axiosResult.then(function (response) {
        console.log(response.data);
        showProduct(response.data);
    }).catch(function (error) {
        console.log(error);
    })
}
showProductList();

// render categories
// const getCategory = (showProductList) => {
//     //[samsung,iphone]
//     const categories = {};

//     for (let item of showProductList) {
//         categories[item.type] = true
//     }
//     const rs = Object.keys(categories)
//     return rs
// }
// const renderCategory = (showProductList) => {
//     const categories = getCategory(showProductList());
//     console.log(categories);
// }

// renderCategory(showProductList)

// const showCategory = () => {
//     let axiosResult = productser.getProductList();
//     let typeValueProduct = document.querySelector('#typeValueProduct').value;
//     console.log(typeValueProduct);
//     axiosResult.then(function (response) {
//         //! a thấy bình thường mah
//         //! chỗ đok đúng mah
//         //! hiên có 2 sp type samsung thì gọi 2 lần đúng ròi
//         //* Nơi thực thi code khi get api thành công !
//         //* Clean code lại nghe, cái nào dạng khai báo thì đưa lên trên, gọi hàm thì để xún phía dưới !
//         for (const item of response.data) {
// const newListProduct = response.data.filter((item) => {

//     return item.type == type
// })

//         }
//     }).catch(function (error) {
//         console.log(error);
//     })
// }
// showCategory();


// set localStorage
const setLocalStorage = (mang) => {
    localStorage.setItem("Cart", JSON.stringify(mang));
}
// add sản phẩm vào giỏ hàng
let cartArr = []
const addCart = (id) => {
    let pro = productser.getProductItem(id)
    pro.then((response) => {
        console.log(response.data);
        cartArr.push(response.data);
        setLocalStorage(cartArr)
    }).catch((error) => {
        console.log(error);
    })

}
// show giỏ hàng
const showCart = () => {
    let content = '';
    let input = Number(document.querySelector('.quantyti')).value;
    console.log(input);
    cartArr.map((product) => {
        content += `
        <tbody>
          <tr class="align-items-center">
            <td class="img"><img src="${product.img}" alt=""></td>
            <td class="name">${product.name}</td>
            <td class="price">${product.price}</td>
            <td><input type="number" value="1" class="quantyti"></td>
            <td>${input*product.price}</td>
            <td><i class="fa-solid fa-trash"></i></td>   
          </tr>

        `
    })
    document.querySelector('.show__cart').innerHTML = content;
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
btnPay.addEventListener('click',() => {
    if (localStorage.getItem("Cart") != null) {
        alert("thanh toán thành công");
        localStorage.removeItem("Cart");
        location.reload();
    }else{
        alert("Không có sản phẩm trong giỏ hàng");
    }
})