/*import express from 'express';
import { askQuestion } from '../controllers/aiController.js';

const router = express.Router();

router.post('/ask', askQuestion);

export default router;
*/

import express from 'express';
import { askQuestion } from '../controllers/aiController.js';

const router = express.Router();

router.post('/ask', askQuestion);

export default router;
