import express from 'express';
import check from '../controller/validate';

const router = express.Router();

router.get('/', check.details);
router.post('/validate-rule', check.validateRoute);


export default router;