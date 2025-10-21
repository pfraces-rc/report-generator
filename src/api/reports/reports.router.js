import { Router } from 'express';
import {
  createReport,
  getReports,
  getReportByPath,
  updateReport,
  deleteReport
} from './reports.model.js';

export const reports = Router();

reports.post('/', (req, res, next) => {
  const report = req.body;

  createReport(report)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      next(error);
    });
});

reports.get('/', (req, res, next) => {
  getReports()
    .then((rows) => {
      res.json(rows);
    })
    .catch((error) => {
      next(error);
    });
});

reports.get('/:reportPath', (req, res, next) => {
  const reportPath = req.params.reportPath;

  getReportByPath(reportPath)
    .then((row) => {
      res.json(row);
    })
    .catch((error) => {
      next(error);
    });
});

reports.put('/:reportPath', (req, res, next) => {
  const reportPath = req.params.reportPath;
  const { report } = req.body;

  updateReport(reportPath, report)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      next(error);
    });
});

reports.delete('/:reportPath', (req, res, next) => {
  const reportPath = req.params.reportPath;

  deleteReport(reportPath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      next(error);
    });
});
