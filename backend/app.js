const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
 const connectDatabase  = require('./config/connectDatabase');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();

app.use(express.json());




const product = require('./routes/product');
const order = require('./routes/order');
connectDatabase();

app.use(cors());


app.use('/api/products', product); 
app.use('/api/orders', order);     
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
