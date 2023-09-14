import { Selectors } from "./selectors";

export function validationForm(event: Event) {
  const form = document.querySelector(Selectors.form) as HTMLFormElement;
  event.preventDefault();
  if (form?.checkValidity()) {
    const emailInput = document.querySelectorAll(Selectors.inputEmail);

    const formData: string[] = [];
    emailInput.forEach((emailInput) => {
      const inputValue = (emailInput as HTMLInputElement).value;
      formData.push(inputValue);
    });

    console.log(formData);
  } else {
    alert("Wypełnij poprawnie wszystkie pola");
  }
}
