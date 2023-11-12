const db = require('../database')

module.exports = class Model{
    constructor(table){
        this.table = table;
    }

    getAll(){
        let CThis = this;

        return new Promise(function(myResolve,myReject){
            db.query('SELECT * FROM ??',[CThis.table],(error,result)=>{
                if(error) throw error
                myResolve(result)
            })
            
        })
    }
    find(id){
        let CThis = this;
       return new Promise(function(myResolve,myReject){
            db.query('SELECT * FROM ?? WHERE id = ?',[CThis.table,id], (error,result)=>{
                if(error) throw error
                myResolve(result[0])
            })
        })
    }

    create(data){
        let CThis = this;

        return new Promise(function(myResolve,myReject){
            db.query('INSERT INTO ?? SET ?',[CThis.table,data],(error,result)=>{
                if(error) throw error
                myResolve(result.affectedRows)

            })
        })

    }

    update(id,data){
        let CThis = this;
        return new Promise((myResolve,myReject)=>{
            db.query('UPDATE ?? SET ? WHERE id = ?',[CThis.table,data,id],(error,result)=>{
                if(error) throw error
                myResolve(result.affectedRows)
            })
        })
    }

    delete(id){
        let CThis = this;
        return new Promise((myResolve,myReject)=>{
            db.query('DELETE FROM ?? WHERE id = ?',[CThis.table,id],(error,result)=>{
                if(error) throw error
                myResolve(result.affectedRows)
            })
        })
    }

    getUser(username,password){
        let CThis = this;
        return new Promise((myResolve,myReject)=>{
            db.query('SELECT * FROM ?? WHERE username = ? AND password = ?',[CThis.table,username,password],(error,result)=>{
                if(error) throw error                
                myResolve(result[0])
            })

        })
    }
    
}