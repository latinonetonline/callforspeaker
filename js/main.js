var dates = []

var api = "https://latinonetonlinebackend.herokuapp.com"

$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: false,
        stepsOrientation: "vertical",
        autoFocus: true,
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

            if (currentIndex == 3 && newIndex == 4)
                return validarSumemosValor();

            return true;
        },
        onFinishing: function (event, currentIndex) { return window.confirm('¿Desea enviar su propuesta para el webinar?'); },
        onFinished: function (event, currentIndex) {  registrarPropuesta() },
    })
});

function validarInformacionPersonal() {

    let name = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("your_email").value;
    let description = document.getElementById("description").value;
    let twitter = document.getElementById("twitter").value;
    let imageElement = document.getElementById("image");
    let image = imageElement.value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(name, "name-fieldset", errorHandle);
    validateInput(lastName, "lastname-fieldset", errorHandle);
    validateInput(ValidateEmail(email), "email-fieldset", errorHandle);
    validateInput(description, "description-fieldset", errorHandle);
    validateInput(image, "image-fieldset", errorHandle);

    if (result) {
        toBase64(imageElement.files[0])
            .then(base64 => {
                let confimacionImagenElement = document.getElementById("confirmacion-imagen");
                confimacionImagenElement.src = base64;
            });


        document.getElementById("confirmacion-nombre").innerText = `${name.trim()} ${lastName.trim()}`
        document.getElementById("confirmacion-email").innerText = email

        if (twitter) {
            document.getElementById("confirmacion-twitter").innerText = twitter.startsWith('@') ? twitter : `@${twitter}`

        }

        document.getElementById("confirmacion-descripcion").innerText = description

    }

    return result;
}

function validarPresentacion() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description2").value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(title, "title-fieldset", errorHandle);
    validateInput(description, "description2-fieldset", errorHandle);

    if (result) {

        document.getElementById("confirmacion-titulo").innerText = title
        document.getElementById("confirmacion-fecha").innerText = `Sábado ${document.getElementById("date").value} de ${getMonth(document.getElementById("month").value)} del ${document.getElementById("year").value}`

        document.getElementById("confirmacion-charla-descripcion").innerText = description

    }

    return result;
}

function validarSumemosValor() {
    let respuesta1 = document.getElementById("question1").value;
    let respuesta2 = document.getElementById("question2").value;
    let respuesta3 = document.getElementById("question3").value;

    let result = true;

    document.getElementById("confirmacion-respuesta1").innerText = respuesta1
    document.getElementById("confirmacion-respuesta2").innerText = respuesta2
    document.getElementById("confirmacion-respuesta3").innerText = respuesta3


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
    loaderShow();

    fetch(`${api}/api/v1/proposals-module/Proposals/dates`)
        .then(response => response.json())
        .then(data => {
            dates = data.result.dates.map(date => new Date(date));
            filtrarFechas();
            loaderHide();
        })

    function filtrarFechas() {
        let selectMes = document.getElementById("month");
        let mes = selectMes.value;
        let año = document.getElementById("year").value;
        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido)
        
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

            if (dates.filter(date => date.getDate() == sabados[index] && date.getUTCMonth() == mes - 1).length == 0 && hoy.getTime() < new Date(`${año}-${mes}-${sabados[index]}`) ) {
                let option = document.createElement("option");
                option.text = sabados[index];
                option.value = sabados[index];
                selectDia.add(option);
            }
        }
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

function loaderHide() {
    let loader = document.getElementById("preloader")

    if (!loader.classList.contains("hide")) {
        loader.classList.add("hide");
    }
}

function loaderShow() {
    let loader = document.getElementById("preloader")

    if (loader.classList.contains("hide")) {
        loader.classList.remove("hide");
    }
}


function completarConfirmación() {
    let loader = document.getElementById("preloader")

    if (loader.classList.contains("hide")) {
        loader.classList.remove("hide");
    }
}

function getMonth(monthNumber) {

    switch (+monthNumber) {
        case 1:
            return "Enero"
        case 2:
            return "Febrero"
        case 3:
            return "Marzo"
        case 4:
            return "Abril"
        case 5:
            return "Mayo"
        case 6:
            return "Junio"
        case 7:
            return "Julio"
        case 8:
            return "Agosto"
        case 9:
            return "Septiembre"
        case 10:
            return "Octubre"
        case 11:
            return "Noviembre"
        case 12:
            return "Diciembre"

    }
}

function registrarPropuesta() {
    const fileInput = document.getElementById("image");
    const formData = new FormData();

    formData.append('file', fileInput.files[0]);
    formData.append('name', document.getElementById("first-name").value);
    formData.append('lastName', document.getElementById("last-name").value);
    formData.append('email', document.getElementById("your_email").value);
    formData.append('twitter', document.getElementById("twitter").value);
    formData.append('speakerDescription', document.getElementById("description").value);
    formData.append('proposalTitle', document.getElementById("title").value);
    formData.append('proposalDescription', document.getElementById("description2").value);
    formData.append('date', `${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("date").value}`);
    formData.append('audienceAnswer', document.getElementById("question1").value);
    formData.append('knowledgeAnswer', document.getElementById("question2").value);
    formData.append('useCaseAnswer', document.getElementById("question3").value);

    const options = {
        method: 'POST',
        body: formData,
        // If you add this, upload won't work
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        // }
    };
    loaderShow();
    fetch(`${api}/api/v1/proposals-module/Proposals`, options)
        .then(response => response.json())
        .then(data => {
            if (data.isSuccess) {
                mostrarFinal(data.result.speaker.name)
            }
            else {
                alert(data.error.code)
            }
            loaderHide();

        })
        .catch(error => {
            loaderHide();
            console.log(error)
        });

}

function mostrarFinal(nombre) {
    document.getElementById("thankyou-title").innerText = `Muchas Gracias ${nombre} Por Postular Su Charla`;

    $("#form-total").steps("destroy");

    let h2s = document.querySelectorAll("h2")
    for (const h2 of h2s) {
        if (!h2.classList.contains("hide")) {
            h2.classList.add("hide");
        }
    }

    let sections = document.querySelectorAll("section")
    for (const section of sections) {
        if (!section.classList.contains("hide")) {
            section.classList.add("hide");
        }
    }

    // let final = document.getElementById("thankyou")

    // if (final.classList.contains("hide")) {
    //     final.classList.remove("hide");
    // }

}
