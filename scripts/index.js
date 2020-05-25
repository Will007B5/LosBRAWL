function getPeople() {
  return fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(res => res.results);
}

async function displayList() {
  const people = await getPeople();
  people.forEach((person, index) => {
    console.log(person);
    document.querySelector('#tbody').innerHTML += `
    <tr>
      <th scope="row">
        <a href="detalle.html?id=${index + 1}">
          ${person.name}
        </a>
      </th>
    </tr>`;
  });
}

function main() {
  displayList();
}

main();
