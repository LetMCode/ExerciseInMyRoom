var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const listItem = $(".content__list");
const listItemNew = $(".content__list-new");
const listItemFruit = $(".content__list-fruit");
const app = {
    currentIndex: 0,

    list: [
        {
            img: "./img/item06.jpg",
            title: "Sữa Chua Vị Kiwi",
            desc: "Hương vị thơm ngon của trái Kiwi xanh, nổi tiếng của đất nước New Zealand có trong Sữa chua vị Kiwi xanh đem đến một món ăn nhẹ Siêu ngon và tốt cho hệ tiêu hóa.",
            coin: "35,000VND",
            quantity: 1,
            key: "1",
        },
        {
            img: "./img/item07.jpg",
            title: "Sữa Chua Vị Xoài",
            desc: "Sữa chua xoài thích hợp cho mọi lứa tuổi, vì vậy hãy để cả gia đình quây quần bên nhau cùng thưởng thức món ăn thơm ngon, bổ dưỡng này.",
            coin: "35,000VND",
            quantity: 1,
            key: "1",
        },
        {
            img: "./img/item03.jpg",
            title: "Sữa Chua Vị Dưa lưới",
            desc: "Trong dưa lưới chứa rất nhiều vitamin C có tác dụng làm đẹp da hiệu quả. Phụ nữ ăn sinh tố dưa lưới thường xuyên sẽ có làn da mịn màng.",
            coin: "35,000VND",
            quantity: 1,
            key: "1",
        },
    ],
    listNew: [
        {
            img: "./img/item01.jpg",
            title: "Sữa Chua Vị Việt Quất",
            desc: "Quả việt quất chứa các dưỡng chất tốt cho sức khỏe như chất xơ, kali, folate, vitamin C và vitamin B6 (những chất hỗ trợ rất tốt cho sức khỏe của tim)",
            coin: "35,000VND",
            quantity: 1,
            key: "2",
        },
        {
            img: "./img/item09.jpg",
            title: "Sữa Chua Vị Mâm Xôi",
            desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng.",
            coin: "35,000VND",
            quantity: 1,
            key: "2",
        },
        {
            img: "./img/item02.jpg",
            title: "Sữa Chua Vị Dâu Tây",
            desc: "Dâu tây là một loài cây thân thảo có thân ngắn và các chiếc lá mọc gần với nhau. Lá có nhiều gai, bề mặt lá có nhiều lông tơ và kích thước lá có thể khác nhau ở từng giống.",
            coin: "35,000VND",
            quantity: 1,
            key: "2",
        },
    ],

    listFruit: [
        {
            img: "./img/item04.jpg",
            title: "Sữa Chua Vị Việt Quất",
            desc: "Quả việt quất chứa các dưỡng chất tốt cho sức khỏe như chất xơ, kali, folate, vitamin C và vitamin B6 (những chất hỗ trợ rất tốt cho sức khỏe của tim)",
            coin: "35,000VND",
            quantity: 1,
            key: "3",
        },
        {
            img: "./img/item05.jpg",
            title: "Sữa Chua Vị Mâm Xôi",
            desc: "Quả mâm xôi là loại quả ăn họ hoa hồng, có nguồn gốc từ châu Âu, Bắc Á và được trồng ở các vùng ôn đới trên toàn thế giới. Có nhiều loại, bao gồm đen, tím và vàng.",
            coin: "35,000VND",
            quantity: 1,
            key: "3",
        },
        {
            img: "./img/item08.jpg",
            title: "Sữa Chua Vị Dâu Tây",
            desc: "Dâu tây là một loài cây thân thảo có thân ngắn và các chiếc lá mọc gần với nhau. Lá có nhiều gai, bề mặt lá có nhiều lông tơ và kích thước lá có thể khác nhau ở từng giống.",
            coin: "35,000VND",
            quantity: 1,
            key: "3",
        },
    ],

    chooseOption: function (option, chooseList) {
        const htmls = option.map((item, index) => {
            return `
            <div class="content__item shadow__box" data-id="${index}">
                <div class="content__item-wrap">
                    <img src="${item.img}" alt="" class="content__item-img">
                </div>
                <h3 class="content__item-name">
                ${item.title}
                </h3>
                <div class="item__desc-wrap">
                    <p data-active="false" data-key="${index}-${item.key}" class="content__item-desc line-clamp">
                        ${item.desc}
                    </p>
                    <a href="#!" data-id="${index}-${item.key}" style="position: initial;" class="intro__info-more">
                        Xem chi tiết
                    </a>
                </div>
                <div class="content__item-order">
                    <label for="" class="item__laber">Số Lượng:</label>
                    <span class="decrease">-</span>
                    <span class="order_quantity" data-value="${item.quantity}">${item.quantity}</span>
                    <span class="increase">+</span>
                </div>
                <button type="submit" class="item__submit">Đặt hàng</button>
            </div>
            `;
        });
        chooseList.innerHTML = htmls.join("");
    },

    render: function () {
        this.chooseOption(this.list, listItem);
        this.chooseOption(this.listNew, listItemNew);
        this.chooseOption(this.listFruit, listItemFruit);
    },

    handleEvents: function () {
        const _this = this;
        const moreBtn = $$(".intro__info-more");
        const descItem = $$(".content__item-desc");
        const decrease = $$(".decrease");
        const increase = $$(".increase");
        const btnOrders = $$(".item__submit");
        let temp;
        var getIteam;
        // click xem chi tiet
        for (let btnOrder of btnOrders) {
            btnOrder.onclick = () => {
                getIteam = btnOrder.closest('.content__item')
            };
            
        }
    
        for (let btn of moreBtn) {
            btn.onclick = (e) => {
                temp = e.target.dataset.id;
                for (let desc of descItem) {
                    if (
                        desc.dataset.key === temp &&
                        desc.dataset.active === "false"
                    ) {
                        desc.classList.add("line-active");
                        desc.dataset.active = "true";
                    } else {
                        desc.classList.remove("line-active");
                        desc.dataset.active = "false";
                    }
                }
            };
        }
        // click tang giam so luong
        for (let decreaseBtn of decrease) {
            decreaseBtn.onclick = (e) => {
                const parentE = e.target.closest(".content__item");
                var temp = parentE.querySelector(".order_quantity");
                if (temp.dataset.value > 0)
                    temp.innerHTML = --temp.dataset.value;
            };
        }
        for (let increaseBtn of increase) {
            increaseBtn.onclick = (e) => {
                const parentE = e.target.closest(".content__item");
                var temp = parentE.querySelector(".order_quantity");
                temp.innerHTML = ++temp.dataset.value;
            };
        }
    },

    start: function () {
        this.render();
        this.handleEvents();
    },
};

app.start();
