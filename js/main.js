var dates = []

var speaker1 = {}

var speaker2 = {}

var presentacion = {}

var preguntas = {}


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

            let secondSpeaker = document.getElementById('second-speaker').checked;

            if (currentIndex == 1 && newIndex == 2)
                return validarInformacionPersonal();


            if (secondSpeaker && currentIndex == 2 && newIndex == 3)
                return validarSegundoSpeakerInformacionPersonal();

            if ((!secondSpeaker && currentIndex == 2 && newIndex == 3) ||
                (secondSpeaker && currentIndex == 3 && newIndex == 4))
                return validarPresentacion();

            if ((!secondSpeaker && currentIndex == 3 && newIndex == 4) ||
                (secondSpeaker && currentIndex == 4 && newIndex == 5))
                return validarSumemosValor();

            return true;
        },
        onFinishing: function (event, currentIndex) { return window.confirm('¿Desea enviar su propuesta para el webinar?'); },
        onFinished: function (event, currentIndex) { registrarPropuesta() },
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

        speaker1 = {
            name: name,
            lastName: lastName,
            email: email,
            twitter: twitter,
            description: description,
        }

    }

    return result;
}

function validarPresentacion() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description2").value;
    let date = document.getElementById("date").value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(title, "title-fieldset", errorHandle);
    validateInput(description, "description2-fieldset", errorHandle);
    validateInput(date, "sabado-fieldset", errorHandle);

    if (result) {

        document.getElementById("confirmacion-titulo").innerText = title
        document.getElementById("confirmacion-fecha").innerText = `Sábado ${document.getElementById("date").value} de ${getMonth(document.getElementById("month").value)} del ${document.getElementById("year").value}`

        document.getElementById("confirmacion-charla-descripcion").innerText = description

        presentacion = {
            title: title,
            description: description,
            date:`${document.getElementById("year").value}-${document.getElementById("month").value}-${document.getElementById("date").value}`
        }

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

    preguntas = {
        audienceAnswer: respuesta1,
        knowledgeAnswer: respuesta2,
        useCaseAnswer: respuesta3
    }

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
                let diaStr = '' + dia
                if (diaStr.length < 2)
                diaStr = '0' + diaStr;
                sabados.push(diaStr)
            }
        }

        let selectDia = document.getElementById("date");

        for (const key in selectDia.options) {
            selectDia.remove(key);
        }

        for (let index = 0; index < sabados.length; index++) {

            if (dates.filter(date => date.getDate() == sabados[index] && date.getUTCMonth() == mes - 1).length == 0 && hoy.getTime() < new Date(`${año}-${mes}-${sabados[index]}`)) {
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

    loaderShow();

    const secondSpeaker = document.getElementById('second-speaker').checked;


    let options = buildFetchFileOptions("image");

    fetch(`${api}/api/v1/proposals-module/Images`, options)
        .then(response => response.json())
        .then(data => {
            if (data.isSuccess) {
                speaker1.image = data.result;

                if (secondSpeaker) {
                    let options = buildFetchFileOptions("second-speaker-image");

                    fetch(`${api}/api/v1/proposals-module/Images`, options)
                        .then(response => response.json())
                        .then(data => {

                            if (data.isSuccess) {
                                speaker2.image = data.result;

                                fetchCreatePropusal();
                            }
                            else {
                                alert(data.error.code)
                            }
                        })
                }
                else {
                    fetchCreatePropusal()
                }

            }
            else {
                alert(data.error.code)
            }
        })
        .catch(error => {
            loaderHide();
            console.log(error)
        });

    function fetchCreatePropusal() {

        const speakers = [speaker1]

        if (secondSpeaker)
            speakers.push(speaker2)

        fetch(`${api}/api/v1/proposals-module/Proposals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...presentacion,
                ...preguntas,
                speakers: speakers
            })
        })
            .then(response => response.json())
            .then(data => {

                if (data.isSuccess) {
                    mostrarFinal(data.result.speakers)
                }
                else {
                    alert(data.error.code)
                }
                loaderHide();
            })
    }

    function buildFetchFileOptions(inputFileId) {
        const fileInput = document.getElementById(inputFileId);

        const formData = new FormData();

        formData.append('file', fileInput.files[0]);

        const options = {
            method: 'POST',
            body: formData,
            // If you add this, upload won't work
            // headers: {
            //   'Content-Type': 'multipart/form-data',
            // }
        };

        return options
    }

}

function mostrarFinal(speakers) {

    const secondSpeaker = document.getElementById('second-speaker').checked;

    let nombreSaludo = speakers[0].name;
    if (secondSpeaker)
        nombreSaludo = `${nombreSaludo} y ${speakers[1].name}`

    document.getElementById("thankyou-title").innerText = `Muchas Gracias ${nombreSaludo} Por Postular Su Charla`;

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

    let segundoSpeakerDiv = document.getElementsByTagName("segundo-speaker")[0]
    if (!segundoSpeakerDiv.classList.contains("hide")) {
        segundoSpeakerDiv.classList.add("hide");
    }

    // let final = document.getElementById("thankyou")

    // if (final.classList.contains("hide")) {
    //     final.classList.remove("hide");
    // }

}


function secondeSpeakerCheckboxOnChange() {
    toogleConfirmacionSegundoSpeaker();
    if (document.getElementById('second-speaker').checked) {
        var html = document.getElementsByTagName("segundo-speaker")[0].innerHTML
        $("#form-total").steps("insert", 2, {
            title: "<p class='step-icon'><span>2.2</span></p><span class='step-text'>Segundo Speaker</span>",
            content: html
        });

    } else {
        $("#form-total").steps("remove", 2);
    }
}


function validarSegundoSpeakerInformacionPersonal() {

    let name = document.getElementById("second-speaker-first-name").value;
    let lastName = document.getElementById("second-speaker-last-name").value;
    let email = document.getElementById("second-speaker-your_email").value;
    let description = document.getElementById("second-speaker-description").value;
    let twitter = document.getElementById("second-speaker-twitter").value;
    let imageElement = document.getElementById("second-speaker-image");
    let image = imageElement.value;

    let result = true;

    const errorHandle = () => result = false;

    validateInput(name, "second-speaker-name-fieldset", errorHandle);
    validateInput(lastName, "second-speaker-lastname-fieldset", errorHandle);
    validateInput(ValidateEmail(email), "second-speaker-email-fieldset", errorHandle);
    validateInput(description, "second-speaker-description-fieldset", errorHandle);
    validateInput(image, "second-speaker-image-fieldset", errorHandle);

    if (result) {
        toBase64(imageElement.files[0])
            .then(base64 => {
                let confimacionImagenElement = document.getElementById("second-speaker-confirmacion-imagen");
                confimacionImagenElement.src = base64;
            });


        document.getElementById("second-speaker-confirmacion-nombre").innerText = `${name.trim()} ${lastName.trim()}`
        document.getElementById("second-speaker-confirmacion-email").innerText = email

        if (twitter) {
            document.getElementById("second-speaker-confirmacion-twitter").innerText = twitter.startsWith('@') ? twitter : `@${twitter}`

        }

        document.getElementById("second-speaker-confirmacion-descripcion").innerText = description

        speaker2 = {
            name: name,
            lastName: lastName,
            email: email,
            twitter: twitter,
            description: description,
        }
    }

    return result;
}


function toogleConfirmacionSegundoSpeaker() {
    let secondSpeaker = document.getElementById('second-speaker').checked;

    var secondSpeakerConfirmacion = document.getElementById('second-speaker-confirmacion')
    if (secondSpeaker) {

        if (secondSpeakerConfirmacion.classList.contains("hide")) {
            secondSpeakerConfirmacion.classList.remove("hide");
        }
    }
    else {

        if (!secondSpeakerConfirmacion.classList.contains("hide")) {
            secondSpeakerConfirmacion.classList.add("hide");
        }
    }
}
