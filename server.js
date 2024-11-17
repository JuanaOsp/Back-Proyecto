const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./middleware/auth');
const cors = require('cors');
const MongoStore = require('connect-mongo');  // Asegúrate de que esto esté instalado


const app = express();
const port = 3010;
app.use(cors({
    origin: 'http://localhost:8080', // Replace with your Vue.js client's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));

const CONNECTION_STRING1 = 'mongodb+srv://davidvr:Santiago2004++@crudbd.ibxja.mongodb.net/?retryWrites=true&w=majority&appName=CrudBD';

mongoose.connect(CONNECTION_STRING1, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB Atlas');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

app.use(session({
    secret: 'mi_secreto_super_seguro', // Cambia esta cadena a algo más seguro en producción
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: CONNECTION_STRING1 }), // Usar MongoDB para almacenar sesiones
    cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Duración de la cookie (1 día)
        httpOnly: true, // Solo accesible por el servidor
        secure: false // Cambiar a true si se usa HTTPS
    }
}));

const productRoutes = require('./routes/productRoutes'); // Adjust the path as needed
const userRoutes = require('./routes/userRoutes');


app.use(bodyParser.json());
app.use(productRoutes);
app.use(userRoutes);
app.use('/auth', authRouter); // Mount the router at /auth path


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


module.exports = app;