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
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
let formData = {};

function onInputValue(evt) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function inputSaveFormData() {
  const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!formValue) {
    return;
  } else {
    refs.input.value = formValue.email || '';
    refs.textarea.value = formValue.message || '';
  }
}
inputSaveFormData();
