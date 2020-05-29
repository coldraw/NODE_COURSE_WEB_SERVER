const request = require('request')

const forecast = (latitude, longitude, callback) => {

  const url = 'http://api.weatherstack.com/current?access_key=90f6b8d72488a1b38356af010c878aa8&query=' + latitude + ',' + longitude

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + `. It is currently ` + body.current.temperature + ` degrees. It feels like ` + body.current.feelslike + ` degrees! Today's humidity is ` + body.current.humidity + `%, with ` + body.current.cloudcover + `% cloud cover. A great day for whatever needs doing!`
      )
    }
  })
}

module.exports = forecast