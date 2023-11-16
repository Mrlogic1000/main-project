const Model = require('../model/model')


Reports = new class ReportModel extends Model {
    constructor() {
        super('reports')
    }

}

const getReport = async (req, res) => {
    const result = await Reports.getAll()    
    res.json(result)
}

const postReport = async (req, res) => {
    try {
        const data = req.body
        const result = await Reports.create(data)
        if (result > 0) es.status(200).json("All data saved successfully")

    } catch (error) {
        console.log(error)
    }

}

const deleteReport = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Reports.delete(id)
        if (result > 0) {
            res.json("Task was deleted successfully")
        } else {
            res.json("No Item with the idenetity in the databases")

        }

    } catch (error) {
        console.log(error)
    }


}

const updateReport = async (req,res)=>{
    try {
        const {id, report,reporter,status,area,comments,color} = req.body;
        const data = {report,reporter,status,area,comments,color}
        const result = await Reports.update(id,data)
        if(result>0) res.json("The Report updated")
    
    } catch (error) {
        console.log(error)
    }
}

const findReport = async (req,res)=>{
    const id = req.params.id
    const result = await Reports.find(id)
    res.json(result)

}





module.exports = {
    getReport,
    postReport,
    deleteReport,
    updateReport,
    findReport

}