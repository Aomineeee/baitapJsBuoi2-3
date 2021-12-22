var number1El = document.getElementById("n1")
var number2El = document.getElementById("n2")
var number3El = document.getElementById("n3")
var number4El = document.getElementById("n4")
var number5El = document.getElementById("n5")
var KetquaEl = document.getElementById("ketqua")

function tinhtoan() {
    var num1 = parseInt(number1El.value)
    var num2 = parseInt(number2El.value)
    var num3 = parseInt(number3El.value)
    var num4 = parseInt(number4El.value)
    var num5 = parseInt(number5El.value)
    var ketQua = (num1 + num2 + num3 + num4 + num5) / 5
    var resultString = "Ra rồi nè: " + ketQua
    KetquaEl.innerText = resultString
}