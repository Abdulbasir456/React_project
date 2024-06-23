import express from 'express';
import { saveChat, getChats } from '../controllers/chatController.js';

const router = express.Router();

router.post('/save', saveChat);
router.get('/history', getChats);

export default router;
