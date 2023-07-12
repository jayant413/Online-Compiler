import express from 'express';
import { getLanguages, getLanguage } from '../../controllers/language.js'

const router = express.Router();

router.get('/', getLanguages)
router.get('/:language_id', getLanguage)


export default router;