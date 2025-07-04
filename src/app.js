import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import 'dotenv/config';  // Para ES Modules (Node.js >= 14)
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));  // Logs de peticiones
app.use(express.json());

// Rutas
app.use('/api/v1', routes);

// Manejo centralizado de errores
app.use(errorHandler);

export default app;
