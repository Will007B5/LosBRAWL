function getPeople() {
  return fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(res => res.results);
}

async function displayList() {
  const people = await getPeople();
  console.log(people);
}

function main() {
  displayList();
}

main();
