const body = document.querySelector('body')
const btnTurnBack = document.createElement("a")
function renderBtn () {
    body.setAttribute("id","body")
    const htmls =  `
        <a href="#body" class="btn__turn-back">
            <img src="../../images/top.png" alt="">
        </a>
    `
    btnTurnBack.innerHTML = htmls;
    return body.appendChild(btnTurnBack);
}

export default renderBtn();