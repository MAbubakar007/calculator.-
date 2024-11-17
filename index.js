

// function appendToDisplay(value) {
//     const display = document.getElementById('display');
//     display.value += value; 
// }

// function clearDisplay() {
//     document.getElementById('display').value = ''; }

// function calculateResult() {
//     const display = document.getElementById('display');
//     try {
//         display.value = eval(display.value); 
//     } catch (error) {
//         alert("Invalid expression");
//         clearDisplay();
//     }
// }

function appendToDisplay(value){
    let display = document.getElementById ('display');
    display.value += value; }
    function clearDisplay(){
        document.getElementById ('display').value = '';}
        function calculateResult(){
            let display = document.getElementById ('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                alert ("Invalid expression");
                clearDisplay();
            }
        }

