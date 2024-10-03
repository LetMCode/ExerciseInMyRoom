const body = document.querySelector('body')
const formOrder = document.createElement('article');
formOrder.setAttribute('class','form-order__wrap')
const handleFormOrder = (options) =>{  
    function renderFormOrder (options) {
        const htmls = `
            <div class="form-order__frame">
            <div class="form-order__tag">
                <div class="form-order__tag-left">
                    <img src="
                " alt="" class="form-order__img">
                </div>
                <div class="form-order__tag-right">
                    <h2 class="form-order__title">

                    </h2>
                    <p class="form-order__desc">

                    </p>
                    <div class="form-order__choose-size">

                    </div>
                    <div class="form-order__quantity">

                    </div>
                    <div class="form-order__note">
                        <input type="" class="form-order__content-note">
                    </div>
                    <div class="form-order__price">

                    </div>
                </div>
                <button class="form-order__submit">

                </button>
            </div>
        </div>
        `
        formOrder.innerHTML = htmls;
        return body.appendChild(formOrder);
    }
    renderFormOrder();
}
export default handleFormOrder();
