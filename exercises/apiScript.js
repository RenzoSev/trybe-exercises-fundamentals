// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const getJoke = (joke) => document.querySelector('#jokeTitle').innerText = joke;

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => getJoke(data.joke));
};

window.onload = () => fetchJoke();
