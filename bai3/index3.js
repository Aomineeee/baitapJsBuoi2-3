var vndEl = 23500
var usdEl = document.getElementById("sotien")
var KetquaEl = document.getElementById("ketqua")

function doitien() {
    var tienVnd = vndEl
    var tienUsd = usdEl.value
    var ketQua = tienUsd * tienVnd
    var resultString = "Đổi Rồi Nè:" + ketQua + "vnđ"
    KetquaEl.innerText = resultString
    console.log(tienUsd);
}