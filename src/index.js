import express from 'express';
import paymentRoutes from './routes/payment.routes.js'

const app = express();

app.use(paymentRoutes);

app.listen(3000);

console.log("Server on port", 3000)



// // app.js - Versión corregida (ES Modules)
// import express from 'express';
// import cors from 'cors';
// import request from 'request';
// const request = require('request');
// import helmet from 'helmet';
// import morgan from 'morgan';
// import routes from './routes/index.js'; // ✅ Extensión .js obligatoria
// import dotenv from 'dotenv';
// //import { errorHandler } from './middlewares/errorHandler.js'; // Descomenta si existe

// // Configura dotenv (alternativa a 'import "dotenv/config"')
// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(helmet());
// app.use(morgan('dev'));
// app.use(express.json());

// // Rutas
// app.use('/api/v1', routes);

// const CLIENT = 'AX-akQXe0fLFyFmrrJHd_FwQu56w4fZhyZHiQq-RA5PoaE7IeHFI4oi1SdC6LMwgrykutEzGNur2x1Cu';
// const SECRET = 'EIGa_dqcmycXjddSfKNRPpvsRrUEIGquAdJ8foI2ssJqpVxiHWRcHXPnmDVnnDaWaj1Pp_WqVroQyPwl';
// const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
// const auth = {user: CLIENT, pass : SECRET}


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });

// export default app;