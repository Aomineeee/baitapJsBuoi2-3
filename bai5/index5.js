var soEl=document.getElementById("chuso")
var KetquaEl=document.getElementById("ketqua")

function tinhtoan(){
    var chuSo=soEl.value
    var unit=chuSo % 10
    var ten= chuSo/10
    var ketQua=unit+ Math.floor(ten)
    var resultString="Ra Rùi Đây:"+ketQua
    KetquaEl.innerText=resultString
}