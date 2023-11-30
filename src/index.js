const express = require('express')
const bodyParser = require('body-parser')
const {Pool } = require ('pg')

const app = express()
const port = 4000
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'plataforma',
  password: 'admin',
  port: 5432
})

app.use(bodyParser.json())

app.post('/api/guardar-usuario', (req, res) =>{
  const {username, email, password} =req.body

  const query = 'INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)'
  const values = [username, email, password]

  pool.query(query, values, (error, result) =>{
    if(error){
      console.error('Error al guardar el usuario', error)
      res.status(500).json({error: 'Error interno del servidor'})
    } else{
      console.log('Usuario guardado exitosamente')
      res.status(200).json({message: 'Usuario guardado Exitosamente'})
    }
  })
})

app.listen(port, () =>{
  console.log('Servidor escuchando en el puerto ${port}')
})
