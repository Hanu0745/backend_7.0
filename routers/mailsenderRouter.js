
import express from 'express';

const router = express.Router();
import { SendMail } from '../controllers/mailsenderController.js';

// routes
router.post('/send-mail', SendMail);

export default router;
