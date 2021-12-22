var tienluongEl = 100000
var songayEl = document.getElementById("songay")
var KetquaEl = document.getElementById("ketqua")

function tinhtien() {
    var tienLuong = tienluongEl
    var soNgay = songayEl.value
    var ketQua = tienLuong * soNgay
    var resultString = "Lương Nè:" + ketQua + "vnđ"
    KetquaEl.innerText = resultString
}