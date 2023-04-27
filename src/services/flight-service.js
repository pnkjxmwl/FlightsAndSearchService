const flights = require('../models/flights');
const { FlightRepository,AirplaneRepository} =require('../repository/index')
const {compareTime} =require('../utils/helper')
class FlightService {

        constructor(){
            this.airplaneRepository= new AirplaneRepository();
            this.flightRepository= new FlightRepository();
        }
    async CreateFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error:'Arrival time cannot be less than departure time'}
            }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
             const flight=await  this.flightRepository.createFlight({
                ...data,
                totalSeats:airplane.capacity
             })
             return flight;
        }
        catch(error){
            throw {error}
        }
    }


}
module.exports= FlightService