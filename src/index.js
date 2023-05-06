import express  from 'express';
import employeesRoute from './routes/employes.routes.js'
import indexRoute from './routes/index.routes.js';
import {PORT} from './config.js';

const app = express();

app.use(express.json())

app.use(indexRoute);
app.use('/api',employeesRoute);

//Si coloca cualquier ruta
app.use((req,res,next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})

app.listen(PORT);
console.log(`Server Running ${PORT}`);