const ClientErrorsCodes= Object.freeze({

    BAD_REQUEST: 400,
    UNAUTHORIZED:401,
    NOT_FOUNF:404    

})

const ServerErrorsCodes = Object.freeze({ //using freeze so that no where like controller can update this object

    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,

})

const SuccessCodes = Object.freeze({
    OK:200,
    CREATED:201
}) 

module.exports={
    SuccessCodes,
    ClientErrorsCodes,
    ServerErrorsCodes
}