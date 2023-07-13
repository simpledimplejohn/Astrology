var testConnectionObject = {
    /*
    dateDataUrl:'someUrl',
    descriptionDataUrl:'anotherUrl'
    */
};

//Instantiate the class
var astrology = new Astrology(testConnectionObject);


var dateButton = document.getElementById('dateObjectButton');
var button = document.getElementById('sendDateMonth');

var zodiacName = document.getElementById('zodiacName');
var zodiacDescription = document.getElementById('zodiacDescription');

var currentZodiacName = '';
var currentZodiacDescription = '';

button.addEventListener('click', function(event){
    event.preventDefault();

    var date = document.getElementById('dateInput').value;
    var month = document.getElementById('monthInput').value;

    astrology.addDay(date);
    astrology.addMonth(month);

    currentZodiacName = astrology.fetchZodiacSign();
    currentZodiacDescription = astrology.fetchZodiacSignDescription();

    //Lets update the DOM
    zodiacName.innerHTML = currentZodiacName;
    zodiacDescription.innerHTML = currentZodiacDescription;
});

dateButton.addEventListener('click', function(event){
    event.preventDefault();

    var dateObject = document.getElementById('dateObjectInput').value;
    astrology.addFullDateString(dateObject);

    currentZodiacName = astrology.fetchZodiacSign();
    currentZodiacDescription = astrology.fetchZodiacSignDescription();

    //Lets update the DOM
    zodiacName.innerHTML = currentZodiacName;
    zodiacDescription.innerHTML = currentZodiacDescription;

});