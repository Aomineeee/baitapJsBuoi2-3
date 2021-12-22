var cdEl = document.getElementById("chieudai")
var crEl = document.getElementById("chieurong")
var KetquaEl = document.getElementById("ketqua")

function tinhtoan() {
    var chieuDai = parseInt(cdEl.value) 
    var chieuRong = parseInt(crEl.value) 
    var chuVi = (chieuDai + chieuRong) * 2
    var dienTich = chieuDai * chieuRong
    var resultString =
    "Chu Vi HCN:" + chuVi + "cm" +'     '+"Diện Tích HCN:" + dienTich + "cm2"
    KetquaEl.innerText = resultString

}