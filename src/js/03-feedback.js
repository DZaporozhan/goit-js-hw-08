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
  console.log({
    email: refs.input.value,
    message: refs.textarea.value,
  });
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
const formData = {
  email: refs.input.value,
  message: refs.textarea.value,
};

function onTextareaInput(evt) {
  formData.message = evt.target.value;
  throttle(saveFormData(), 500);
}

function onMailInput(evt) {
  formData.email = evt.target.value;
  throttle(saveFormData(), 500);
}
function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const formValue = JSON.parse(localStorage.getItem('feedback-form-state'));
function inputSaveFormData() {
  if (formValue) {
    refs.input.value = formValue.email;
    refs.textarea.value = formValue.message;
  }
}
inputSaveFormData();
