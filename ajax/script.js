fetch('https://api.nasa.gov/planetary/apod?api_key=viSIKiso19UTU3msKwBiU8BiNm7i8g4pmcNfRq9y')
    .then(res => console.log(res))
    //viSIKiso19UTU3msKwBiU8BiNm7i8g4pmcNfRq9y

var two = 'https://api.nasa.gov/planetary/apod?date=';
var key = 'api_key=viSIKiso19UTU3msKwBiU8BiNm7i8g4pmcNfRq9y';


sendApiRequest('2021-05-03');
//An asynchronous function to fetch data from the API.
async function sendApiRequest(date) {
    let response = await fetch(`${two}${date}&${key}`); //call fetch with time passing as a promise
    console.log(response)
    let data = await response.json() //catches fetch and stores as JSON
    console.log(data)
    useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {

    const content = document.querySelector("#content")

    content.textContent += data.explanation;

    const newImage = document.createElement("img");
    newImage.src = data.url;

    const image = document.querySelector("#image")
    image.replaceChild(newImage, image.childNodes[0]);

}

function myFunction(date) {
    sendApiRequest(date);
}