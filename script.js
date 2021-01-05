'use strict'

document.getElementById('mybtn').addEventListener('click', museum)
//Event Listener connects the button with the function "museum()"

function museum () {
  const age = (document.getElementById('age').value)
  const day = (document.getElementById('day').value)
  let Tuesday = Date
  let Thursday = Date
  if (age >=12 && age <=21) {
    alert('eligible for student pricing')
    //makes an alert pop up
  } else if (day == Tuesday || day == Thursday) {
    alert('eligible for student pricing') 
    //makes an alert pop up  
  } else {
    alert('must pay regular pricing')
    //makes an alert pop up
  }
}
