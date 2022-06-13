/*
BÀI 1: TÍNH NGÀY THÁNG

BƯỚC 1: LẤY VALUE 

BƯỚC 2: XEM NGƯỜI DÙNG CHỌN NGÀY NÀO
    +NẾU CHỌN NGÀY HÔM QUA LẤY VALUE - 1
    +NẾU CHỌN NGÀY MAI LẤY VALUE + 1

BƯỚC 3:KẾT QUẢ =?
 */


var btnNgayHomQua = document.getElementById('btnNgayHomQua');
btnNgayHomQua.onclick = function () {

    var nhapNgay = +document.getElementById('nhapNgay').value;

    var nhapThang = +document.getElementById('nhapThang').value;
    var nhapNam = +document.getElementById('nhapNam').value;

    var pNgay = document.getElementById('pNgay');

    if ((nhapNgay >= 2 && nhapNgay <= 31) && (nhapThang == 1 || nhapThang == 3 || nhapThang
        == 5 || nhapThang == 7 || nhapThang
        == 8 || nhapThang == 10 || nhapThang == 12)) {

        pNgay.innerHTML = `${nhapNgay - 1}/${nhapThang}/${nhapNam}`;
    }
    else if (nhapNgay == 1 && (nhapThang
        == 5 || nhapThang == 7 || nhapThang
        == 8 || nhapThang == 10 || nhapThang == 12)) {

        pNgay.innerHTML = `${30}/${nhapThang - 1}/${nhapNam}`;
    }


    else if (nhapNgay == 1 && (nhapThang == 2 || nhapThang == 4 || nhapThang
        == 6 || nhapThang == 9 || nhapThang
        == 11)) {

        pNgay.innerHTML = `${31}/${nhapThang - 1}/${nhapNam}`;
    }

    else if (nhapNgay == 1 && nhapThang == 1) {
        pNgay.innerHTML = `31/12/${nhapNam - 1}`;
    }
    else if (nhapNgay == 1 && nhapThang == 3) {
        pNgay.innerHTML = `28/2/${nhapNam}`;
    } else if (nhapNgay <= 28 && nhapNgay >= 2) {
        pNgay.innerHTML = `${nhapNgay - 1}/${nhapThang}/${nhapNam}`;
    }


}
// Có cách nào để làm ngắn hơn không mentor ơi (hướng dẫn giúp mình với nha)



var btnNgayMai = document.getElementById('btnNgayMai');
btnNgayMai.onclick = function (e) {
    e.preventDefault();
    var nhapNgay = +document.getElementById('nhapNgay').value;

    var nhapThang = +document.getElementById('nhapThang').value;
    var nhapNam = +document.getElementById('nhapNam').value;

    var pNgay = document.getElementById('pNgay');

    if ((nhapNgay >= 1 && nhapNgay <= 30) && (nhapThang == 1 || nhapThang == 3 || nhapThang
        == 5 || nhapThang == 7 || nhapThang
        == 8 || nhapThang == 10 || nhapThang == 12)) {
        pNgay.innerHTML = `${nhapNgay + 1}/${nhapThang}/${nhapNam}`;
    }
    else if (nhapNgay == 31 && (nhapThang
        == 1 || nhapThang
        == 3 || nhapThang
        == 5 || nhapThang == 7 || nhapThang
        == 8 || nhapThang == 10)) {

        pNgay.innerHTML = `1/${nhapThang + 1}/${nhapNam}`;
    }


    else if (nhapNgay == 30 && (nhapThang == 2 || nhapThang == 4 || nhapThang
        == 6 || nhapThang == 9 || nhapThang
        == 11)) {

        pNgay.innerHTML = `${1}/${nhapThang + 1}/${nhapNam}`;
    }

    else if (nhapNgay == 31 && nhapThang == 12) {
        pNgay.innerHTML = `1/1/${nhapNam + 1}`;
    }
    else if (nhapNgay == 28 && nhapThang == 2) {
        pNgay.innerHTML = `1/3/${nhapNam}`;
    } else if ((nhapNgay < 28 && nhapNgay >= 1) && nhapThang == 2) {
        pNgay.innerHTML = `${nhapNgay + 1}/${nhapThang}/${nhapNam}`;
    }
}



// BÀI 2: TÍNH SỐ NGÀY KHI NHẬP THÁNG VÀ NĂM

/**
 * BƯỚC 1: LẤY VALUE 
 * 
 * BƯỚC 2: TÌM NHỮNG THÁNG CÓ 31 NGÀY VÀ 30 NGÀY,
 *          SO SÁNH ĐIỀU KIỆN XEM NĂM NHẬP VÀO XEM CÓ PHẢI NĂM NHUẬN KHÔNG
 * 
 * BƯỚC 3: KẾT QUẢ = ?
 */

var btnTinhSoNgay = document.getElementById('btnTinhSoNgay');
btnTinhSoNgay.onclick = function () {

    var nhapThang2 = +document.getElementById('nhapThang2').value;
    var nhapNam2 = +document.getElementById('nhapNam2').value;

    var pNgay2 = document.getElementById('pNgay2');

    

    switch (nhapThang2 ) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 12:
            pNgay2.innerHTML = `Tháng ${nhapThang2} có 31 ngày`
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            pNgay2.innerHTML = `Tháng ${nhapThang2} có 30 ngày`
            break;
        
        case 2:    
                if((nhapNam2 % 4 === 0 && nhapNam2 % 100 !==0) || nhapNam2 % 400 === 0) {

                    pNgay2.innerHTML = `Tháng ${nhapThang2} có 29 ngày`
                }else {

                    pNgay2.innerHTML = `Tháng ${nhapThang2} có 28 ngày`
                }
            break;
        default:
            pNgay2.innerHTML = 'không xác định'
    }
}


// BÀI 3:ĐỌC SỐ

/**
 * BƯỚC 1: LẤY VALUE 
 * 
 * BƯỚC 2: LẤY RA GIÁ TRỊ HÀNG TRĂM, CHỤC, ĐƠN VỊ ==> switch case TỪNG GIÁ TRỊ
 * 
 * BƯỚC 3:KẾT QUẢ = ?
 * 
 */

var btnDocSo = document.getElementById('btnDocSo');
btnDocSo.onclick = function() {
    var nhapSo = +document.getElementById('nhapSo').value

    var pso = document.getElementById('pso')

    var hangTram = Math.floor(nhapSo / 100 % 10);
    var hangChuc = Math.floor(nhapSo % 100 / 10);
    var hangDonVi = Math.floor(nhapSo %  10);

    var ketQua1;
    switch (hangTram){
        case 0:
            ketQua1 = 'Không trăm'
            
        break;
        case 1:
            ketQua1 = 'Một trăm'
            
        break;
        case 2:
            ketQua1 = 'Hai trăm'
        break;
        case 3:
            ketQua1 = 'Ba trăm'
        break;
        case 4:
            ketQua1 = 'Bốn trăm'
        break;
        case 5:
            ketQua1 = 'Năm trăm'
        break;
        case 6:
            ketQua1 = 'Sáu trăm'
        break;
        case 7:
            ketQua1 = 'Bảy trăm'
        break;
        case 8:
            ketQua1 = 'Tám trăm'
        break;
        case 9:
            ketQua1 = 'Chín trăm'
        break;
        default:
            ketQua1 = 'không xácđịnh'
    }

var ketQua2;
    switch (hangChuc ){
        case 0:
            if(hangDonVi==0){
                ketQua2 = ''
            }else if(hangDonVi!==0){

                ketQua2 = 'lẻ'
            }
        break;
        case 1:
            ketQua2 = 'mười'
        break;
        case 2:
            ketQua2 = 'hai mươi'
        break;
        case 3:
            ketQua2 = 'ba mươi'
        break;
        case 4:
            ketQua2 = 'bốn mươi'
        break;
        case 5:
            ketQua2 = 'năm mươi'
        break;
        case 6:
            ketQua2 = 'sáu mươi'
        break;
        case 7:
            ketQua2 = 'bảy mươi'
        break;
        case 8:
            ketQua2 = 'tám mươi'
        break;
        case 9:
            ketQua2 = 'chín mươi'
        break;

        default:
            ketQua2 = 'không xác định'

    }

    var ketQua3;
    switch (hangDonVi){
        case 0:
            
            ketQua3 =''
            break;
        case 1:
            ketQua3 ='một'
        break;
        case 2:
            ketQua3 = 'hai'
        break;
        case 3:
            ketQua3 = 'ba'
        break;
        case 4:
            ketQua3 = 'bốn'
        break;
        case 5:
            ketQua3 = 'năm'
        break;
        case 6:
            ketQua3 = 'sáu'
        break;
        case 7:
            ketQua3 = 'bảy'
        break;
        case 8:
            ketQua3 = 'tám'
        break;
        case 9:
            ketQua3 = 'chín'
        break;

        default:
            ketQua3 = 'không xác định'
    }
    
    
    pso.innerHTML = `${ketQua1} ${ketQua2} ${ketQua3}`

}



// BÀI SỐ 4: Tính Quảng Đường

/**
 * BƯỚC 1: LẤY VALUE
 * 
 * BƯỚC 2: TÍNH QUẢNG ĐƯỜNG VÀ SO SÁNH
 * 
 * BƯỚC 3: KẾT QUẢ = ?
 */


var btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function(){
    // sv1
    var nhapTen1 = document.getElementById('nhapTen1').value;
    var nhapx1 = document.getElementById('nhapx1').value;
    var nhapy1 = document.getElementById('nhapy1').value;
    

    // sv2
    var nhapTen2 = document.getElementById('nhapTen2').value;
    var nhapx2 = document.getElementById('nhapx2').value;
    var nhapy2 = document.getElementById('nhapy2').value;

    // sv3
    var nhapTen3 = document.getElementById('nhapTen3').value;
    var nhapx3 = document.getElementById('nhapx3').value;
    var nhapy3 = document.getElementById('nhapy3').value;

    // trường
    var nhapXTruong = document.getElementById('nhapXTruong').value;
    var nhapYTruong = document.getElementById('nhapYTruong').value;

    var pTinh = document.getElementById('pTinh');

    // D1
    var d1 = Math.sqrt(((nhapXTruong - nhapx1)*(nhapXTruong - nhapx1)) + ((nhapYTruong - nhapy1)*(nhapYTruong - nhapy1)))

    // D2
    var d2 = Math.sqrt(((nhapXTruong - nhapx2)*(nhapXTruong - nhapx2)) + ((nhapYTruong - nhapy2)*(nhapYTruong - nhapy2)))
    
    // D3
    var d3 = Math.sqrt(((nhapXTruong - nhapx3)*(nhapXTruong - nhapx3)) + ((nhapYTruong - nhapy3)*(nhapYTruong - nhapy3)))

    if(d1 > d2 && d1 > d3){
        pTinh.innerHTML = nhapTen1 +' '+ 'xa trường nhất'
    }else if(d2 > d1 && d2 > d3){
        pTinh.innerHTML = nhapTen2 +' '+ 'xa trường nhất'
    }else if(d3 > d2 && d3 > d1){
        pTinh.innerHTML = nhapTen3 +' '+ 'xa trường nhất'
    }else(
        pTinh.innerHTML = 'không xác định'
    )


}