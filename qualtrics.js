var setPing = function () {
    console.log('set ping start');
    var ping = 'ping';
    var iframe = document.getElementById('gametest1');
    iframe.contentWindow.postMessage(ping, '*');
    console.log('set ping end');
};

var onReady = function () {
    console.log('adding onReady');
    $('NextButton').hide();

    setTimeout(setPing, 2000);
    window.addEventListener('message', processGameData);
    console.log('added onReady');
};

var processGameData = function (event) {
    console.log('game data start');
    var tiles_bought = event.data.tiles_purchased.join();
    var count = 0, total = 0;
    for (a in event.data.accuracy) {
        total = total + event.data.accuracy[a];
        count++;
    }

    var accuracy = count ? total / count : 0;

    Qualtrics.SurveyEngine.setEmbeddedData('tiles_bought', tiles_bought);
    Qualtrics.SurveyEngine.setEmbeddedData('accuracy', accuracy);
    Qualtrics.SurveyEngine.setEmbeddedData('starting_tokens', event.data.starting_tokens);
    Qualtrics.SurveyEngine.setEmbeddedData('ending_tokens', event.data.ending_tokens);
    
    console.log('game data set');
    $('NextButton').click();
    console.log('game data next clicked');
};

Qualtrics.SurveyEngine.addOnload(function () {
    $('NextButton').hide();
});

Qualtrics.SurveyEngine.addOnReady(onReady);

Qualtrics.SurveyEngine.addOnUnload(function () {

});