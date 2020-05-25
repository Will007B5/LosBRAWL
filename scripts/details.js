function getPerson(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(res => res.json())
}

function getHomeWorld(link) {
  return fetch(link)
    .then(res => res.json())
}

async function displayPerson(id) {
  const person = await getPerson(id);
  const homeWorld = await getHomeWorld(person.homeworld);
  document.querySelector('#name').value = person.name;
  document.querySelector('#height').value = person.height;
  document.querySelector('#mass').value = person.mass;
  document.querySelector('#hair_color').value = person.hair_color;
  document.querySelector('#skin_color').value = person.skin_color;
  document.querySelector('#eye_color').value = person.eye_color;
  document.querySelector('#birth_year').value = person.birth_year;
  document.querySelector('#gender').value = person.gender;
  document.querySelector('#created').value = new Date(person.created).toLocaleDateString();
  document.querySelector('#edited').value = new Date(person.edited).toLocaleDateString();
  document.querySelector('#url').value = person.url;
  document.querySelector('#homeworld').value = homeWorld.name;
}

function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  displayPerson(id);
}

main();
