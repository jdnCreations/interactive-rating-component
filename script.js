const selectedRating = '';

const ratings = document.querySelectorAll('.rating');

ratings.forEach((item) => {
  item.addEventListener('click', (e) => {
    ratings.forEach((btn) => btn.classList.remove('selected'));
    e.target.classList.add('selected');
  });
});

const submit = document.getElementById('submit');
submit.addEventListener('click', handleSubmit);

function getRating() {
  const rating = document.querySelector('.selected');
  if (rating == null) return '';
  if (parseInt(rating.innerHTML)) return parseInt(rating.innerHTML);
}

function handleSubmit() {
  const rating = getRating();

  if (rating == '') {
    return 'no rating was submitted.';
  }
  showThankYou(rating);
}

// removes rating card, adds thank you card.
function showThankYou(rating) {
  // remove current card
  document.querySelector('.card').remove();

  // create thank you card
  const card = document.createElement('div');
  const image = document.createElement('img');
  const selectedrating = document.createElement('p');
  const title = document.createElement('h1');
  const info = document.createElement('p');

  card.classList.add('card');
  card.classList.add('thank-you');
  image.src = './images/illustration-thank-you.svg';
  image.setAttribute('id', 'thank-you-img');
  selectedrating.setAttribute('id', 'selected-rating');
  selectedrating.innerHTML = `You selected ${rating} out of 5`;
  title.innerHTML = 'Thank you!';
  title.classList.add('title');
  info.innerHTML =
    'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
  info.classList.add('info');
  info.classList.add('text-center');

  card.appendChild(image);
  card.appendChild(selectedrating);
  card.appendChild(title);
  card.appendChild(info);

  document.body.insertAdjacentElement('afterbegin', card);
}
