import express from 'express';
const router = express.Router();

import { readFile } from 'fs/promises';

//const file = await readFile('\README.md', 'utf8'); //??? 

/* GET Download Page. */
router.get('/', (req, res, next) => {    
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename="README.md"`);
    res.send(readFile('\README.md', 'utf8'));
});

export default router;
