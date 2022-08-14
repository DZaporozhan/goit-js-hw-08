import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInputValue);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log({
    email: refs.input.value,
    message: refs.textarea.value,
  });
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
let formData = {};

function onInputValue(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
}

const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
function inputSaveFormData() {
  if (!formValue) {
    return;
  }
  refs.input.value = formValue.email ? formValue.email : '';
  refs.textarea.value = formValue.message ? formValue.message : '';
}
inputSaveFormData();
