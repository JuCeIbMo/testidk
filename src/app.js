// app.js - Versión corregida (ES Modules)
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/index.js'; // ✅ Extensión .js obligatoria
import dotenv from 'dotenv';
//import { errorHandler } from './middlewares/errorHandler.js'; // Descomenta si existe

// Configura dotenv (alternativa a 'import "dotenv/config"')
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Rutas
app.use('/api/v1', routes);

// Manejo de errores (si lo implementas)
//app.use(errorHandler); // Descomenta si usas este middleware

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;