const { City }= require('../models/index')   // models/index.js have all the models ,we can use it by destructuring

class CityRepository{

    async createCity({ name }){    
        try{

            const city= await City.create({
                name : name     // model property : value
            });
            return city;
        }
        catch(error)
        {
                console.log("something went wrong in the repository layer");
                throw {error};
        }
    }

    async deleteCity( cityid )
    {
            try{
                     await City.destroy({
                        where:{
                            id:cityid
                        }
                      })      
                return true;
            }
            catch(error)
            {
                throw {error};
            }
    }
    async getCity(cityid){

        try{
            const city= await City.findByPk(cityid);
            return city;
        }
        catch(error)
        {
                throw {error};
        }


    }
    async updateCity(cityid,data){ //data is a object containing what needs to be updated   { name:" alahabad"} 
 
        try{
            //this below approach works but did not  return updated object 
            // const city= await City.update(data,{
            //     where:{
            //         id:cityid
            //     }
            // })
            const city= await City.findByPk(cityid);
            city.name=data.name
            await city.save();
                return city;
        }
        catch(error){
            throw {error}
        }

    }

}
module.exports = CityRepository