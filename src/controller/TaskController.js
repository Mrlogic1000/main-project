const db = require('../database')
const Model = require('../model/model')

Tasks = new class TaskModel extends Model {
    constructor() {
        super('tasks')
    }
}

const getTask = async (req, res) => {
    const result = await Tasks.getAll()
    res.json(result)
}

const postTask = async (req, res) => {
    try {
        const data = req.body
        const result = await Tasks.create(data)
        if (result > 0) {
            res.status(200).json("All data saved successfully")
        }

    } catch (error) {
        console.log(error)
    }
}


const deleteTask = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Tasks.delete(id)
        if (result > 0) {
            res.json("Task was deleted successfully")
        } else {
            res.json("No Item with the idenetity in the databases")

        }

    } catch (error) {
        console.log(error)
    }


}

const updateTask = async (req,res)=>{
    try {
        const {name, type, status,assign, ob, id} = req.body;
        const data = {name, type, status,assign, ob,}
        const result = await Tasks.update(id,data)
        if(result>0) res.json("The Task updated")
    
    } catch (error) {
        console.log(error)
    }
}

const getTaskById = async (req, res) => {
    const id = req.params.id
    const result = await Tasks.find(id)
    res.json(result)

}



module.exports = {
    getTask,
    postTask,
    deleteTask,
    updateTask,
    getTaskById
}