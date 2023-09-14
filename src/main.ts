import './style.css'
import { Selectors } from './selectors'
import { addNewField } from './addInput';
import { validationForm } from './validations';
import 'bootstrap-icons/font/bootstrap-icons.css'


const addButton = document.querySelector(Selectors.buttonAdd);
const submitButton = document.querySelector(Selectors.buttonSubmit);

addButton?.addEventListener('click', (e) => addNewField(e));
submitButton?.addEventListener('click', (e) => validationForm(e))
