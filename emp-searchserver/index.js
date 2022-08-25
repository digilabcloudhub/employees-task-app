import express from 'express';
import cors from'cors'
const app =express();
import {employees} from './employees.js'


const PORT=5000;
 app.use(cors());
 
 app.get('/employees',(req,res)=>{
    res.json(employees);
}) 


 app.get('/employees/:isActive',(req,res)=>{
   
   
   let result=  employees.filter(item=>item.isActive===req.params.isActive);
   if(!result)
   res.status(404).send('Data Not found');
     res.json(result); 
  }) 
 

app.listen(PORT,()=>console.log("API is working"+PORT));
