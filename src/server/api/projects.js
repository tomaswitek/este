import Poject from '../../common/projects/project';
import express from 'express';

const router = express.Router();

const projects = [
  new Poject({
    id: 1,
    shortname: 'hls-018',
    description: 'CCB 2016'
  }),
  new Poject({
    id: 2,
    shortname: 'gsc-001',
    description: 'Kostenrechnung'
  })
];

router.route('/')
  .get((req, res) => {
    // Simulate async access.
    // In real app we would check user credentials and load user data from DB.
    setTimeout(() => {
      res.status(200).send(projects).end();
    }, 50);
  });

export default router;
