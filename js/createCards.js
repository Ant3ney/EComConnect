let template = document.querySelector('template.card-display');
let templateChild = template.content.cloneNode(true);

cards.forEach((card, i) => {
  templateChild = template.content.cloneNode(true);
  document.querySelector('.cards-container').appendChild(templateChild);
});
