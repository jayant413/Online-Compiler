import v1Routes from './v1/index.js'
import express from 'express';

const router = express.Router();


router.use('/v1', v1Routes)



export default router;