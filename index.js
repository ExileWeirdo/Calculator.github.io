var buttons = document.getElementsByClassName("button");
var arr = [...buttons];
const calculator = document.querySelector(".calculator")


arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      calculator.classList.add("theme-1")
      calculator.classList.remove("theme-2")
      calculator.classList.remove("theme-3")
      document.body.style.background = "hsl(222 26% 31%)"
    } 
    else if (index == 1) {
        calculator.classList.add("theme-2")
        calculator.classList.remove("theme-1")
        calculator.classList.remove("theme-3")
        document.body.style.background = "hsl(0 0% 90%)"
    } 
    else {
        calculator.classList.add("theme-3")
        calculator.classList.remove("theme-2")
        calculator.classList.remove("theme-1")
        document.body.style.background = "hsl(268 75% 9%)"
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

function handleButtonClick(value){
    const display = document.querySelector('.display');
    display.value += value;

}

function calculate(){
    const display = document.querySelector('.display');
    const currentValue = display.value;
    try{
        display.value = eval(currentValue);
    }
    catch (error){
        display.value = 'Error';
    }
}

function clearDisplay(){
    const display = document.querySelector('.display');
    display.value = '';
}

function deleteLastCharacter(){
    const display = document.querySelector('.display');
    display.value  = display.value.slice(0, -1);
}
