import express from 'express';
const router = express.Router();

// Ruta de prueba "Hello World"
router.get('/hello', (req, res) => {
  res.status(200).json({ message: '¡Hola Mundo! El deploy funciona correctamente 🚀' });
});

export default router;
