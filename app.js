const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2] 
if (!address) {
    console.log('Provide an address!')
} else{
    geocode(address, (error, {longitude, latitude, location}) => {
        if (error){
            console.log(error)
        }
    
        forecast(longitude,latitude,  (error, forecastData) => {
           if (error){
               console.log(error) 
           }
           console.log(location)
           console.log(forecastData)
          })
    })
}