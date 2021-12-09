const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function printCards(array, container) {
  container.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];

    const templateDiv = `
      <div class="card">
        <h1>${obj.name}</h1>
        <h2>${obj.role}</h2>
        <img src="img/${obj.image}" alt="">
      </div>`;
    container.innerHTML += templateDiv;
  }
}

const container = document.querySelector('.team-container');
printCards(team, container);