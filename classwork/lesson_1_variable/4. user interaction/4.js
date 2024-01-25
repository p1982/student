const message = 'Отправить форму?'
const isFormSent = confirm(message);

if (isFormSent) {
  console.log('Форма успешно отправлена.');
} else {
  console.log('Форма не была отправлена.');
}
