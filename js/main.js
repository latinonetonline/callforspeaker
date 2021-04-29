$(function () {
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
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
    })
});

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