// local reviews data
const reviews = [
  {
    id: 1,
    name: 'dimitri',
    job: 'SAP ABAP e Fiori',
    img: 'persons/DimitriCalixto.jpg',
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consequuntur ipsam quisquam explicabo recusandae accusantium, tempore numquam aliquam nihil! Ullam est, placeat quis quibusdam sequi inventore, nostrum minus voluptatem esse, quasi consequatur aperiam odio praesentium at in error provident reiciendis alias sint doloribus. Et similique tenetur vitae autem explicabo voluptas quae modi quasi eos. Aut pariatur voluptatum repellat in quae.",
  },
  {
    id: 2,
    name: 'marcos',
    job: 'Desenvolvedor Front-End',
    img: 'persons/MarcosVinicius.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati sapiente modi quae laboriosam cumque sit. Ipsum eius perferendis soluta.',
  },
  {
    id: 3,
    name: 'andre',
    job: 'Desenvolvedor Back-End',
    img: 'persons/NonePic_01.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati sapiente modi quae laboriosam cumque sit. Ipsum eius perferendis soluta..',
  },
  {
    id: 4,
    name: 'rafael',
    job: 'Engenheiro de Software',
    img: 'persons/NonePic_02.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati sapiente modi quae laboriosam cumque sit. Ipsum eius perferendis soluta. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
