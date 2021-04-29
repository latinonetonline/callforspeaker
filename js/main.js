$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: false,
        stepsOrientation: "vertical",
        autoFocus: true,
        saveState: true,
        transitionEffectSpeed: 500,
        titleTemplate: '<div class="title">#title#</div>',
        labels: {
            previous: '<i class="zmdi zmdi-arrow-left"></i>',
            next: '<i class="zmdi zmdi-arrow-right"></i>',
            finish: '<i class="zmdi zmdi-check"></i>',
            current: ''
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex == 1 && newIndex == 2)
                return validarInformacionPersonal();

            if (currentIndex == 2 && newIndex == 3)
                return validarPresentacion();

            return true;
        },
    })
});

function validarInformacionPersonal() {
    let name = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("your_email").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(name, "name-fieldset", errorHandle);
    validateInput(lastName, "lastname-fieldset", errorHandle);
    validateInput(ValidateEmail(email), "email-fieldset", errorHandle);
    validateInput(description, "description-fieldset", errorHandle);
    validateInput(image, "image-fieldset", errorHandle);

    return result;
}

function validarPresentacion() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description2").value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(title, "title-fieldset", errorHandle);
    validateInput(description, "description2-fieldset", errorHandle);

    return result;
}



function validateInput(condition, fieldsetId, errorCallback) {
    var fieldset = document.getElementById(fieldsetId)
    if (condition) {
        if (fieldset.classList.contains("error")) {
            fieldset.classList.remove("error");
        }
    }
    else {
        if (!fieldset.classList.contains("error")) {
            fieldset.classList.add("error");
        }
        errorCallback()
    }
}


function mesOnChange() {
    let selectMes = document.getElementById("month");
    let mes = selectMes.value;
    let año = document.getElementById("year").value;

    let sabados = [];
    for (let dia = 1; dia <= 31; dia++) {

        var fecha = new Date(`${año}-${mes}-${dia}`);

        if (fecha.getUTCDay() == 6) {
            sabados.push(dia)
        }
    }

    let selectDia = document.getElementById("date");

    for (const key in selectDia.options) {
        selectDia.remove(key);
    }

    for (let index = 0; index < sabados.length; index++) {

        let option = document.createElement("option");
        option.text = sabados[index];
        option.value = sabados[index];
        selectDia.add(option);

    }
}

function ValidateEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true
    }
    return false
}

//https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});