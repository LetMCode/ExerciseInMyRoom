function Validator(options) {
    var formElement = document.querySelector(options.form);
    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
        );
        var errorMessage;

        var rules = selectorRules[rule.selector];

        for (var i = 0; i < rules.length ; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorElement) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
        }
        return !errorMessage;
    }

    function changeCSS(inputElement) {
        const labelElement =
            inputElement.parentElement.querySelector(".form-label");
        labelElement.classList.remove("focus");
        labelElement.style.top = "10%";
        labelElement.classList.add("invalid");
    }

    if (formElement) {
        formElement.onsubmit = (e) => {
            e.preventDefault();
            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);

                if (!isValid) {
                    changeCSS(inputElement);
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll(
                        "[name]:not([disabled])"
                    );
                    var formValue = Array.from(enableInputs).reduce(
                        (values, input) => {
                            return (values[input.name] = input.value) && values;
                        },
                        {}
                    );
                    options.onSubmit(formValue);
                }
            }
        };

        options.rules.forEach((rule) => {
            var errorElement = document.querySelector(".form-message");
            var inputElement = formElement.querySelector(rule.selector);

            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            if (inputElement) {
                inputElement.onfocus = () => {
                    changeCSS(inputElement);
                };
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                };
            }

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
            return value !== "" ? undefined : message || "Vui lòng nhập tên";
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
