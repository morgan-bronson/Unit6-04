'use strict'

document.getElementById('mybtn').addEventListener('click', museum)
// Event Listener connects the button with the function "museum()"

function museum () {
  const age = (document.getElementById('age').value)
  // gets age from html document
  const day = (document.getElementById('day').value)
  // gets day of week from html document
  if ((age >= 12 && age <= 21) || day === 'Tuesday' || day === 'Thursday') {
    alert('eligible for student pricing')
    // makes an alert pop up
  } else {
    alert('must pay regular pricing')
    // makes an alert pop up
  }
}
