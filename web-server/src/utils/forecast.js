const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1512ff4367bdfadd7b768e2e13629460&query=' + address

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' current tempreture ' + body.current.temperature)
        }
    })
}

module.exports = forecast