import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
refs.input.addEventListener('input', onMailInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
let formData = {};
function onTextareaInput(evt) {
  const message = evt.target.value;
  formData.message = message;
  throttle(saveFormData(), 500);
}

function onMailInput(evt) {
  const email = evt.target.value;
  formData.email = email;
  throttle(saveFormData(), 500);
}
function saveFormData() {
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
function inputSaveFormData() {
  const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formValue) {
    refs.input.value = formValue.email;
    refs.textarea.value = formValue.message;
  }
}
inputSaveFormData();
