const inputSearch = document.querySelector(".input-navbar__search");

const appSearch = {
    renderBtnSearch: function () {
        const body = document.querySelector("body");
        const btnSearch = document.createElement("a");

        const htmls = `
                <a href="#!" class="btn__search">
                    <img src="../../images/btn-search.png" alt="">
                </a>
            `;
        btnSearch.innerHTML = htmls;
        return body.appendChild(btnSearch);
    },

    // renderBtnSearchInput: function () {
    //     const locationInputSearch =
    //         document.querySelector(".container-product");
    //     const beforeInputSearch = document.createElement(
    //         "nav"
    //     );
    //     beforeInputSearch.setAttribute("class","inactive nav__bar nav__bar-search")
    //     const htmls = `
    //         <input class="input-navbar__search" type="text" placeholder="Nhập sản phẩm cần tìm..."/>
    //     `;
    //     beforeInputSearch.innerHTML = htmls;
    //     console.log(beforeInputSearch);
    //     console.log(locationInputSearch);
    //     return locationInputSearch.appendChild(beforeInputSearch);
    // },

    handleSearch: function () {
        const navbar = document.querySelector("#nav__bar");
        const btnSearch = document.querySelector(".btn__search");
        const navbarSearch = document.querySelector(".nav__bar-search");

        let isActive = false;
        function insertNewNavbar() {
            if (isActive === false) {
                navbarSearch.classList.add("active-f");
                navbar.classList.add("inactive");
                inputSearch.value = "";
                isActive = true;
            } else {
                navbarSearch.classList.remove("active-f");
                navbar.classList.remove("inactive");
                isActive = false;
            }
        }
        btnSearch.addEventListener("click", insertNewNavbar);
    },

    handleEvents: function (){
        const _this = this;
        inputSearch.onchange=(e)=>{
            (e.target.value !== "") ?
            _this.sendInput(e.target.value) : 
            ""
        }
    },
    sendInput: (e) =>{
        console.log(e)
    },
    start: function () {
        // this.renderBtnSearchInput();
        this.renderBtnSearch();
        this.handleSearch();
        this.handleEvents();
    },
};
export default appSearch.start();

// export default appSearch;
