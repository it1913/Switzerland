$(function () {
    function eventsBlock(historicalEvents) {
        historicalEvents.forEach((historicalEvents) => {
            $("#seznam").append(`<li class="list-group-item list-group-item-action list-group-item-danger akce">${historicalEvents.name}</li>`);
        });


        function fillText(text) {
            let historical = historicalEvents.find(item => { return item.name === text });
            //console.log(historical);
            $("#nazev").text(historical.name);
            $("#vypis").text(historical.context);
        }
        $("#seznam li:first").addClass('active');
        fillText(historicalEvents[0].name);
        $("#seznam li").on('click', function () {
            fillText($(this).text());
            //console.log($(this).text());
            //console.log("ahoj");
            $("#seznam li").removeClass('active');
            $(this).addClass('active');
        });
    }

    function heroesBlock(personalities) {
        personalities.forEach((personalities) => {
            $('#osobnosti').append(
                `<div class="flip-card col-md-4">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${personalities.image}" alt="${personalities.personality}">
                    </div>
                    <div class="flip-card-back">
                        <h1><a class="a" href="${personalities.link}" target="_blank">${personalities.personality}</a></h1> 
                        <p>${personalities.bio}</p> 
                    </div>
                </div>
            </div>`
            )
        })
    }
    fetch('../historie/data/historie.json')
    .then(response => {
        return response.json();
    })
    .then(json =>{
        eventsBlock(json);
    })
    .catch(function(error){
        console.error('Chyba: \n', error);
    });

    fetch('../historie/data/osobnosti.json')
    .then(response => {
        return response.json();
    })
    .then(json =>{
        heroesBlock(json);
    })
    .catch(function(error){
        console.error('Chyba: \n', error);
    });
})
