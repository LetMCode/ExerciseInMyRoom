// import renderHeader from './Js-Modules/header.js'
// renderHeader();
const body = document.querySelector("body");
const header = document.createElement("header");
function renderHeader() {
    const htmls = `
            <div class="container container-product">
                <nav class="nav__bar" id="nav__bar">
                    <a href="../../index.html"><img src="../../images/logo.png" alt="" class="nav__logo"></a>
                    <ul class="nav__list">
                        <li>
                            <a href="../../index.html" class="nav__item">Trang chủ</a>
                        </li>
                        <li>
                            <a href="../intro/index.html" class="nav__item">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="../product/index.html" class="nav__item">Sản Phẩm</a>
                        </li>
                        <li>
                            <a href="../news/index.html" class="nav__item">Tin Tức</a>
                        </li>
                        <li>
                            <a href="../contact/index.html" class="nav__item">Liên hệ</a>
                        </li>
                    </ul>
                    <div class="nav__input">
                        <div class="modal__search btn-search">
                           
                        </div>
                        <a href="../signIn/index.html" class="nav__input-signIn">Đăng nhập</a>
                        <a href="../signUp/index.html" class="nav__input-signUp">Đăng ký</a>
                        
                    </div>
                    </nav>
                    <nav class="inactive nav__bar nav__bar-search">
                        <input class="input-navbar__search" type="text" placeholder="Nhập sản phẩm cần tìm..."/>
                    </nav>
            </div>
    `;
    header.innerHTML = htmls;
    return body.appendChild(header);
}

export default renderHeader();
