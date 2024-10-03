function Validator(options) {
    var formElement = document.querySelector(options.form);

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
        );
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        }
    }

    function changeCSS(inputElement) {
        const labelElement =
            inputElement.parentElement.querySelector(".form-label");
        labelElement.classList.remove("focus");
        labelElement.style.top = "10%";
        labelElement.classList.add("invalid");
    }

    if (formElement) {
        options.rules.forEach((rule) => {
            var errorElement = document.querySelector(".form-message");
            var inputElement = formElement.querySelector(rule.selector);

            inputElement.onfocus = () => {
                changeCSS(inputElement);
            };
            inputElement.onblur = () => {
                validate(inputElement, rule);
            };
            inputElement.oninput = () => {
                errorElement.innerText = "";
                inputElement.parentElement.classList.remove("invalid");
            };
        });
    }
}

Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: function (value) {
            return value !== "" ?
            undefined
            : message || "Vui lòng nhập tên"
        },
    };
};

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)
                ? undefined
                : message || "Vui lòng nhập đúng Email";
        },
    };
};

Validator.isPasswd = (selector, min, message) => {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min
                ? undefined
                : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
        },
    };
};

Validator.isConfirmed = (selector, getConfirmPasswd, message) => {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmPasswd()
                ? undefined
                : message || "Mật khẩu nhập lại không chính xác";
        },
    };
};
