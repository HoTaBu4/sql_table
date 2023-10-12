import  express  from 'express'

import mysql from 'mysql2/promise'

const conn = {
    host:"localhost",
    user:"root",
    password:"",
    database:"vova",
}

export default async function getData(req,res,next){
    try {
        const connection =  await mysql.createConnection(conn)

        const [rows] = await connection.execute('select * from persons')
        res.locals.persons = rows

        connection.end()

        next()
    } 
    catch (error) {
        console.log('Error',error)
        res.status(500).send('internet connection')
    }

    next()
 }