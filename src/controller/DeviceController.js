const db = require('../database')
const Model = require('../model/model')


Devices = new class DeviceModel extends Model {
    constructor() {
        super('devices')
    }
}


getDevice = async (req, res) => {
    const result = await Devices.getAll()
    res.json(result)
}





postDevice = async (req, res) => {
    try {
        const data = req.body
        const result = await Devices.create(data)
        if (result > 0) {
            res.status(200).json("All data saved successfully")
        }

    } catch (error) {
        console.log(error)
    }
}


deleteDevice = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Devices.delete(id)
        if (result > 0) {
            res.json("Task was deleted successfully")
        } else {
            res.json("No Item with the idenetity in the databases")

        }

    } catch (error) {
        console.log(error)
    }


}


getDeviceById = async (req, res) => {
    const id = req.params.id
    const result = await Devices.find(id)
    res.json(result)

}

putDevice = async (req, res) => {
    try {
        const { name, device_id, status, installation, description, categories, network_address, mac, id } = req.body

        const data = { name, device_id, status, installation, description, categories, network_address, mac }
        const result = await Devices.update(id, data)
        if (result > 0) {
            res.status(200).json("The data edited successfully")
        }

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getDevice,
    postDevice,
    deleteDevice,
    getDeviceById,
    putDevice,












}