const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript file'

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = searchTerm.value

  messageOne.textContent = 'Loading weather forecast...'
  messageTwo.textContent = ''
  
  fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (!location) {
        messageOne.textContent = 'Please enter a location to search'
      } else if (data.error) {
        messageOne.textContent = 'Location not found. Please try a different search ya mofo'
      } else {
        messageOne.textContent = 'You searched ' + data.location
        messageTwo.textContent = 'Weather is ' + data.forecast
      }
    })
  })

})