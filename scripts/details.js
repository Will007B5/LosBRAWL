function getPerson(id) {
  return fetch(`https://swapi.dev/api/people/${id}/`)
    .then(res => res.json())
}

async function displayPerson(id) {
  const person = await getPerson(id);
  console.log(person);
}

function main() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  displayPerson(id);
}

main();