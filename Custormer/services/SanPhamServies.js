function ProductServices() {
    this.getProductList = function () {
        return axios({
            method : 'get',
            url: 'https://64184a8175be53f451db32bc.mockapi.io/Products',
        })
    }
    this.addProductSer = function (product) {
        return axios({
            method: 'post',
            url: 'https://64184a8175be53f451db32bc.mockapi.io/Products',
            data: product,
        })
    }
    this.getProductItem = function (id) {
        return axios({
            method: 'get',
            url: `https://64184a8175be53f451db32bc.mockapi.io/Products/${id}`,
        })
    }
     // xóa sp
    //  this.deleteProductSer = function (id) {
    //     return axios({
    //         method: 'delete',
    //         url: `https://64184a8175be53f451db32bc.mockapi.io/Products/${id}`,
    //     })
    // }
}