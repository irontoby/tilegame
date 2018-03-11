Qualtrics.SurveyEngine.addOnload(function()
{
     $('NextButton').hide();
});

Qualtrics.SurveyEngine.addOnReady(function()
{
$('NextButton').hide();
var iframe = document.getElementById('gametest1');

var ping = 'ping';
setTimeout(function(){iframe.contentWindow.postMessage(ping, '*'); }, 2000);
window.addEventListener('message', function(event) { 
var tiles_bought = event.data.tiles_purchased.join();
var count=0,total=0;
for(a in event.data.accuracy)
{
total = total+event.data.accuracy[a]
count++;
}
var accuracy = total/count;
Qualtrics.SurveyEngine.setEmbeddedData('tiles_bought', tiles_bought);
Qualtrics.SurveyEngine.setEmbeddedData('accuracy', accuracy);
Qualtrics.SurveyEngine.setEmbeddedData('starting_tokens', event.data.starting_tokens);
Qualtrics.SurveyEngine.setEmbeddedData('ending_tokens', event.data.ending_tokens);
$('NextButton').click();
}); 
});

Qualtrics.SurveyEngine.addOnUnload(function()
{

});