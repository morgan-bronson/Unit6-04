'use strict'

document.getElementById('mybtn').addEventListener('click', museum)
//Event Listener connects the button with the function "museum()"

function museum () {
  const age = (document.getElementById('age').value)
  const day = (document.getElementById('day').value)
  let Tuesday = 'day'
  let Thursday = 'day'
  if (age >=12 && age <=21 || day == Tuesday || day == Thursday) {
    alert('eligible for student pricing')
    //makes an alert pop up
   } else {
    alert('must pay regular pricing')
    //makes an alert pop up
  }
}
