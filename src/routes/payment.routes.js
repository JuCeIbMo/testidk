import {Router} from 'express'

const router = Router()

router.get("/create-order", (req, res)=> res.send('create-order') )

router.get("/success", (req, res)=> res.send('success') )

router.get("/webhook", (req, res)=> res.send('webhook') )



export default router;