const CrudService= require('./crud-service')

const {AirportRepository} =require('../repository/index')

class AirportService extends CrudService{ 

    constructor(){
        
        const  airportRepoObj= new AirportRepository();
        super(airportRepoObj);
    }


}
module.exports= AirportService