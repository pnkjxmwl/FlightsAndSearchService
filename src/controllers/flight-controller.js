const {FlightService} =require('../services/index')

const flightservice= new FlightService();

const create = async(req,resp)=>{
        try{
            const flight = await flightservice.CreateFlight(req.body);
            
            return resp.status(201).json({
                data:flight,
                success:true,
                err:{},
                message:'Succesfully created a flight'
            })
        }
        catch(error){
            //console.log(error)
            return resp.status(500).json({
                data:{},
                success:false,
                message:'Not able to create a flight',
                err: error
            })

        }


}
module.exports ={
    create
}