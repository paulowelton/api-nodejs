const passeioModel = require('../models/passeioModel')

const getPasseio = async (request, response) => {
    const getPasseioModel = await passeioModel.getPasseio()
    
    return response.status(200).json(getPasseioModel)
}

const createPasseio = async (request, response) => {
    const createPasseioModel = await passeioModel.createPasseio(request.body)
    if (!request.body) { 
        return response.status(400).json({ message: "Campos inválidos" })
    }
    return response.status(201).json(createPasseioModel)
}

const deletePasseio = async (request, response) => {
    const deletePasseioModel = await passeioModel.deletePasseio(request.params)
    if(!request.params){
        return response.status(400).json({message: "Parametros inexistentes"})
    }
    return response.status(204).json({message: "Passeio deletado"})
}

const updatePasseio = async (request, response) => {
    const updatePasseioModel = await passeioModel.updatePasseio(request.params, request.body)
    if(!request.params){
        return response.status(400).json({message:"parametros inexistentes"})
    }
    if(!request.body){
        return response.status(400).json({message:"campos inexistentes"})
    }
    return response.status(204).json(updatePasseioModel)
}

module.exports = {
    getPasseio,
    createPasseio,
    deletePasseio,
    updatePasseio
}