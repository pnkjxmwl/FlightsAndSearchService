const { CityService }= require('../services/index')

const cityService= new CityService();

//POST --> req.body
const create = async (req,resp)=>{
    try{
        const city= await cityService.createCity(req.body)
        return resp.status(201).json({
            data:city,
            success:true,
            message:'Succesfully created a city',
            err: {}
        })
    }
    catch(error)
    {
        console.log(error)
        return resp.status(500).json({
            data:{},
            success:false,
            message:'Not able to create city',
            err: error
        })
    }

}

//DELETE   -> /city/:id
const destroy = async(req,resp)=>{
    try{
        const response= await cityService.deleteCity(req.params.id)
        return resp.status(200).json({
            data:response,
            success:true,
            message:'Succesfully deleted a city',
            err: {}
        })
    }
    catch(error)
    {
        console.log(error)
        return resp.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete city',
            err: error
        })
    }

}

//GET --> /city/:id
const get = async(req,resp)=>{
    try{
        const city= await cityService.getCity(req.params.id)
        return resp.status(200).json({
            data:city,
            success:true,
            message:'Succesfully fetched a city',
            err: {}
        })
    }
    catch(error)
    {
        console.log(error)
        return resp.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the city',
            err: error
        })
    }

}


//PATCH - /city/:id ->req.body(data in req body)
const update = async (req,resp)=>{
    try{
        const city= await cityService.updateCity(req.params.id,req.body)
        return resp.status(200).json({
            data:city,
            success:true,
            message:'Succesfully updated a city',
            err: {}
        })
    }
    catch(error)
    {
        console.log(error)
        return resp.status(500).json({
            data:{},
            success:false,
            message:'Not able to update city',
            err: error
        })
    }

}
module.exports = {
    create,destroy,get,update
}