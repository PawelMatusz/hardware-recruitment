import { Selectors } from "./selectors";

export function addNewField(event: Event) {
    event?.preventDefault()

    const existingField = document.querySelector(Selectors.inputEmailContainer);
    
    if (existingField) {

      const newField = existingField.cloneNode(true) as HTMLElement;
      

      const removeButton = document.createElement("button");
      removeButton.classList.add('button__remove')
      removeButton.innerHTML = `<i class="bi bi-x"></i>`;
      removeButton.addEventListener("click", () => {
        newField.remove(); 
      });
  

      newField.appendChild(removeButton);

      const newId = `email-${Math.random().toString(36).substring(7)}`;
      newField?.querySelector(Selectors.inputEmailLabel)?.setAttribute('for', newId);
      newField?.querySelector(Selectors.inputEmail)?.setAttribute('id', newId);

      (<HTMLInputElement>newField!.querySelector('[data-email-input]'))!.value = '';

      const container = document.querySelector("[data-inputs-container]");
      const inputs = document.querySelectorAll(Selectors.inputEmailContainer);
      inputs.length > 4 ? console.log('Maksymalnie 5 elementów') : container?.appendChild(newField);
     
    }
  }