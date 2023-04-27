
module.exports= {
    CityRepository : require('./city-repository'),
    FlightRepository :require('./flight-repository'),
    AirplaneRepository: require('./airplane-repository')
}
// here we are exporting all repository as a object so that we dont require tons of requrie we can just use this
// object and get any repository by destructuring it