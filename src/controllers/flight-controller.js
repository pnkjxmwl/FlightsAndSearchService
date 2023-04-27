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

const getAll= async (req,resp)=>{
    try {
        
        const flights= await flightservice.getAllflights(req.query)
        return resp.status(201).json({
            data:flights,
            success:true,
            message:'Succesfully fetched all flights'
            ,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return resp.status(500).json({
            data:{},
            success:false,
            message:'Not able to get all flight',
            err: error
        })
    }
}
module.exports ={
    create,
    getAll
}