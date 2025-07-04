// routes/index.js
import { Router } from 'express';
const router = Router();

// Ejemplo de ruta
router.get('/', (req, res) => {
  res.send('Ruta principal');
});

export default router;