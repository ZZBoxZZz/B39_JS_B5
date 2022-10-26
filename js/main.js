document.getElementById("btnB1").onclick = function (){
    var diemchuan = document.getElementById("b1").value;
    var khuvuc = document.getElementById("sel1").value;
    var doituong = document.getElementById("sel2").value;

    var diemkhuvuc = 0;
    var diemdoituong =0;
    var diemuutien = 0;
    var diem1 = document.getElementById("b1_1").value*1;
    var diem2 = document.getElementById("b1_1_x").value*1;
    var diem3 = document.getElementById("b1_1_y").value*1;

    if(khuvuc == "A"){
        diemkhuvuc = 2;
    } else if (khuvuc == "B"){
        diemkhuvuc = 1;
    } else if (khuvuc == "C"){
        diemkhuvuc = 0.5;
    } else {
        diemkhuvuc = 0;
    }

    if(doituong ==1){
        diemdoituong = 2.5;
    } else if(doituong == 2){
        diemdoituong = 1.5;
    } else if (doituong == 3){
        diemdoituong = 1;
    } else {
        diemdoituong = 0;
    }

    diemuutien = diemkhuvuc + diemdoituong;

    var d = diem1+diem2+diem3+diemuutien;
    if (d >= diemchuan){
        document.getElementById("infoB1").innerHTML = "Bạn đã đậu. Tổng điểm: "+d;
    } else {
        document.getElementById("infoB1").innerHTML = "Bạn đã rớt. Tổng điểm: "+d;
    }
}

//B2
document.getElementById("btnB2").onclick = function (){
    //đầu vào
    var ten = document.getElementById("b2").value;
    var Kw = document.getElementById("b2_1").value*1;
    var tongtien = 0;
    const numberFormat = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    // if(Kw < 50){
    //     tongtien = Kw * 500;
    // } else if (Kw >= 50 && Kw <100){
    //     tongtien = 50*500 +(Kw - 50) *650;
    // } else if (Kw >=100 && Kw <200){
    //     tongtien = 50*500+ 50 *650 + (Kw - 100) *850;
    // } else if (Kw >=200 && Kw <350){
    //     tongtien = 50*500+ 50 *650 + 100 *850 + (Kw - 200) *1100;
    // } else{
    //     tongtien = 50*500+ 50 *650 + 100 *850 + 150 *1100 + (Kw - 350)*1300;
    // }
    document.getElementById("infoB2").innerHTML = "Tên: "+ten+"; Số tiền điện: "+numberFormat.format(tinhtongtien(Kw)); //đầu ra
}
//Xử lí
function tinhtongtien(Kw){
    if(Kw < 50){
        tongtien = Kw * 500;
    } else if (Kw >= 50 && Kw <100){
        tongtien = 50*500 +(Kw - 50) *650;
    } else if (Kw >=100 && Kw <200){
        tongtien = 50*500+ 50 *650 + (Kw - 100) *850;
    } else if (Kw >=200 && Kw <350){
        tongtien = 50*500+ 50 *650 + 100 *850 + (Kw - 200) *1100;
    } else{
        tongtien = 50*500+ 50 *650 + 100 *850 + 150 *1100 + (Kw - 350)*1300;
    }
    return tongtien;
}

//B3

function B3() {
    var ten = document.getElementById("b3").value;
    var sothunhap = document.getElementById("b3_1").value*1;
    var songuoi = document.getElementById("b3_2").value*1;
    var thunhapchiuthue = sothunhap - 4000000 - (songuoi*1600000);
    var tongtien = 0;
    if (thunhapchiuthue <=60){
        tongtien = thunhapchiuthue * 0.05;
    } else if( thunhapchiuthue > 60 && thunhapchiuthue <= 120){
        tongtien = 60 * 0.05 + (thunhapchiuthue - 60) * 0.1;
    } else if (thunhapchiuthue > 120 && thunhapchiuthue <= 210){
        tongtien = 60 * 0.05 + 60 * 0.1 + (thunhapchiuthue - 120)*0.15;
    } else if (thunhapchiuthue > 210 && thunhapchiuthue <= 384){
        tongtien = 60 * 0.05 + 60 * 0.1 + 90 * 015 + (thunhapchiuthue - 210)*0.2;
    } else if (thunhapchiuthue > 384 && thunhapchiuthue <= 624){
        tongtien = 60 * 0.05 + 60 * 0.1 + 90 * 015 + 174*0.2 + (thunhapchiuthue - 384)*0.25;
    } else if (thunhapchiuthue > 624 && thunhapchiuthue <= 960){
        tongtien = 60 * 0.05 + 60 * 0.1 + 90 * 015 + 174*0.2 + 240*0.25+ (thunhapchiuthue - 384)*0.3;
    } 