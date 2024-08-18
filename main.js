document.addEventListener("DOMContentLoaded", () => {
    const resultElement = document.getElementById("resultado");
    const addFieldButton = document.getElementById("MasCampos");
    const changeColorButton = document.getElementById("CambiarColor");
  
    function calculateSum() {
      const inputs = document.querySelectorAll(".numero");
      let sum = 0;
      inputs.forEach((input) => {
        const value = parseInt(input.value, 10);
        if (!isNaN(value)) {
          sum += value;
        }
      });
      resultElement.textContent = `Suma: ${sum}`;
    }
  
    function addInputField() {
      const newInput = document.createElement("input");
      newInput.type = "numero";
      newInput.className = "numero";
      newInput.addEventListener("input", calculateSum);
      document.body.insertBefore(newInput, resultElement);
    }
  
    function changeBackgroundColor() {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
    }
  
    document.querySelectorAll(".numero").forEach((input) => {
      input.addEventListener("input", calculateSum);
    });
  
    addFieldButton.addEventListener("click", addInputField);
    changeColorButton.addEventListener("click", changeBackgroundColor);
  });