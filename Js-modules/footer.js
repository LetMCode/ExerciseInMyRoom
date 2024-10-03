// import renderHeader from './Js-Modules/header.js'
// renderHeader();
const body = document.querySelector('body')
const footer = document.createElement('footer')
    function renderFooter () {
        const htmls =  `
                <div class="footer">
                    <div class="container">
                        <div class="footer__body">

                            <h3 class="footer__possess">
                                ⓒ 2021 Bản quyền thuộc về FreeezeVN.
                            </h3>
                            <h3 class="footer__title">
                                Follow us:
                            </h3>
                            <div class="footer__list">
                                <a href="#!" class="footer__social">Facebook</a>
                                <a href="#!" class="footer__social">Twitter</a>
                                <a href="#!" class="footer__social">Pinterest</a>
                            </div>
                        </div>
                    </div>
                </div>
        `
        footer.innerHTML = htmls;
        return body.appendChild(footer);
    }

export default renderFooter();