$(function () {
    let mesta = [];
    let kantony = [];
    fetch('../historie/data/mesta.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            mesta = json;
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });

    fetch('../historie/data/kantony.json')
        .then(response => {
            return response.json();
        })
        .then(json => {
            defaultCity(json);
            kantony = json;
        })
        .catch(function (error) {
            console.error('Chyba: \n', error);
        });
    function defaultCity(kantony) {
        let defaultCanton = kantony.find(item => { return item.id === "BER" });
        console.log(defaultCanton);
        $("#vypis").html(`<h2>${defaultCanton.name}</h2>
        <img class="img-fluid" src="${defaultCanton.img}">
        <p><strong>Populace kantonu</strong> (<i>v roce 2016</i>): ${defaultCanton.population}</p>
        <p><strong>Rozloha kantonu</strong>: ${defaultCanton.expanse} km²</p>
        `);
        $("#BER").css({ 'fill': 'rgb(145, 145, 145)' });
    }

    let cityColor = 'rgb(219,0,0)';
    $('#mapa ellipse').on('click', function () {
        let id = $(this).attr("id");
        $('#mapa ellipse').css({ 'fill': cityColor });
        $(this).css({'fill': 'rgb(167, 6, 6)'});
        let informaceMesta = mesta.find(item => { return item.id === id });
        $("#vypis").html(`<h2>Město ${informaceMesta.name}</h2>
        <img class="img-fluid" src="${informaceMesta.img}">
        <p>${informaceMesta.text}</p>
        `);
    })

    $("path").on('click', function () {
        $("path").css({ 'fill': 'rgb(117, 117, 117)' })
        $(this).css({ 'fill': 'rgb(145, 145, 145)' })
        let id2 = $(this).attr("id");
        let informaceKantony = kantony.find(item => { return item.id === id2 });
        console.log(informaceKantony);
        $("#vypis").html(`<h2>${informaceKantony.name}</h2>
        <img class="img-fluid" src="${informaceKantony.img}">
        <p><strong>Populace kantonu</strong> (<i>v roce 2016</i>): ${informaceKantony.population}</p>
        <p><strong>Rozloha kantonu</strong>: ${informaceKantony.expanse} km²</p>
        `);
    });
    $("#mestaSwitch").on('click', function () {
        $(".MESTA").toggle(300);
    });
});
