import express from 'express';
import { createSubmission, getSubmission } from '../../controllers/submission.js';

const router = express.Router();

router.post('/', createSubmission);
router.get('/:token', getSubmission);


export default router;