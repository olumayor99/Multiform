const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = parseInt(
  formSteps.find((step) => {
    return step.classList.contains("active");
  })?.dataset.step
);

console.log(currentStep);
