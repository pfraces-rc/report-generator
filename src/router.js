import { Router } from 'express';
import { reports } from '#src/api/reports/reports.router.js';

export const router = Router();

router.use('/reports', reports);
