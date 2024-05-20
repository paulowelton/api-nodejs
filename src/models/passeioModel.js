const connection = require('../models/connection')

const getPasseio = async () => {
    const [getAll] = await connection.execute('SELECT * FROM passeios')
    return getAll
}

const createPasseio = async (passeio) => {
    const { name, description, value, image } = passeio
    
    const query = 'INSERT INTO passeios (name,description,value,image) VALUES (?,?,?,?)'
    const [createTask] = await connection.execute(query, [name, description, value, image])
    return createTask
}

const deletePasseio = async (passeioId) => {
    const { id } = passeioId
    const query = 'DELETE FROM passeios WHERE id = ?'
    const [deleteTask] = await connection.execute(query, [id])
    return deleteTask
}

const updatePasseio = async (passeioId, novasInformacoes) => {
    const {id} = passeioId
    const {name, description, value, image} = novasInformacoes
    const query = 'UPDATE passeios SET name = ?, description = ?, value = ?, image = ? WHERE id = ?'
    const [updateTask] = await connection.execute(query, [name,description,value,image,id])
    return updateTask
}

module.exports = {
    getPasseio,
    createPasseio,
    deletePasseio,
    updatePasseio
}