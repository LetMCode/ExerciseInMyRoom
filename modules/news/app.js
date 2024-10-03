var locationAdd = document.querySelector('.content__main')

const app  = {
    list: [
        {
            title: "LỘ DIỆN SIÊU NĂNG LỰC TỪ TRÁI XOÀI!",
            img: "./img/news1.jpg",
            desc: "Xoài là một trong những cây ăn trái chủ lực của đồng bằng sông Cửu Long (ĐBSCL), chiếm khoảng 48% tổng diện tích xoài cả nước. Trong đó, tỉnh Đồng Tháp hiện có diện tích trồng xoài khoảng 12.171ha - lớn nhất vùng ĐBSCL với sản lượng hàng năm gần 124 ngàn tấn.",
            lastTime: "2 ngày trước",
            readTime: "4 phút đọc",
        },
        {
            title:"SỮA CÁC LOẠI HẠT-MÓN NGON CHO HỆ MIỄN DỊCH KHOẺ",
            img:"./img/news2.jpg",
            desc:"Các loại sữa hạt càng ngày trở nên quen thuộc với mọi người, bởi hàm lượng dinh dưỡng cao, và lành tính. Với thị trường sữa hạt đa dạng phong phú, hôm nay chúng ta cùng điểm qua xem có các loại sữa hạt nào, và loại nào là bổ dưỡng nhất cho sức khỏe?",
            lastTime:"1 tháng trước",
            readTime: "6 phút đọc",
        },
        {
            title:"SỮA CHUA KIWI – MÓN QUÀ CHO SỨC KHỎE",
            img:"./img/news3.jpg",
            desc:"Kiwi thành phần dinh dưỡng rất cao so với các loại hoa quả khác. Hàm lượng vitamin C cao cho hệ miễn dịch khỏe mạnh cùng nguồn chất xơ hỗ trợ hệ tiêu hóa. Siêu quả Kiwi cho cả nhà siêu khỏe, 100% Vitamin C cần thiết mỗi ngày",
            lastTime:"2 tháng trước",
            readTime: "4 phút đọc",
        },
        {
            title:"RA MẮT APP SỮA CHUA Freeeze TRÊN NỀN TẢNG IOS",
            img:"./img/news4.jpg",
            desc:"Nhằm mang đến cho tất cả khách hàng những trải nghiệm thú vị nhất Công ty Sữa Chua Freeeze giới thiệu app đặt hàng độc đáo, giúp khách hàng mua sắm được mọi lúc mọi nơi với nhiều tiện ích",
            lastTime:"3 tháng trước",
            readTime: "5 phút đọc",
        },
        {
            title:"ĐĂNG KÝ THÀNH VIÊN – NHẬN NGAY ƯU ĐÃI",
            img:"./img/news5.jpg",
            desc:"Công ty sữa chua hân hạnh mang đến chương trình \"Đăng Ký Thành Viên\" với nhiều ưu đãi độc đáo. Member Card – thẻ thành viên nhà Sữa Chua Freeeze dành cho tất cả khách hàng đăng kí tài khoản và phát sinh đơn hàng.",
            lastTime:"4 tháng trước",
            readTime: "8 phút đọc",
        },
        {
            title:"TUYỂN GIÁM SÁT CHUỖI CỬA HÀNG",
            img:"./img/news6.jpg",
            desc:"Tuyển Giám Sát chuỗi cửa hàng : – tại khu vực TP Hải Phòng & các tỉnh lân cận – Số lượng: 01 MÔ TẢ: Giám sát hoạt động kinh doanh các cửa hàng; Kiểm tra lịch làm việc của các cửa hàng",
            lastTime:"5 tháng trước",
            readTime: "7 phút đọc",
        },
    ],

    render: function (list){
        const htmls = list.map((box) =>{
            return `
            <div class="main-box shadow__box">
                <div class="main-box__info">
                    <h3 class="main__title">
                        ${box.title}
                    </h3>
                    <p class="main__desc">
                        ${box.desc}
                    </p>
                    <div class="main__time">
                        <p class="last-time ">
                            ${box.lastTime}
                        </p>
                        <span style="white-space: pre;"> - </span>
                        <p class="read-time">
                            ${box.readTime}
                        </p>
                    </div>
                </div>
                <img src="${box.img}" alt="" class="main__thumb">
            </div>
            `;
        })
        locationAdd.innerHTML = htmls.join("");
    },

    start:function (){
        this.render(this.list);
    }
}

app.start()