import  express  from 'express'
import path from 'path'
import  getData  from './middleWare.js';

const app  = express()
const port = 3000;
const __dirname = path.resolve()

app.set('view engine', 'ejs')

app.set('views',path.resolve(__dirname,'ejs'))

app.use(getData)

app.get( '/',(req,res) =>{
    const persons = res.locals.persons
    console.log(persons);
    res.render('main',{persons})
   
})

app.listen(port,()=>{
    console.log('server is running port 3000');
})
