import Task from '../../common/tasks/task';
import express from 'express';

const router = express.Router();

const tasks = [
  new Task({
    id: 1,
    project_id: 1,
    name: 'Development'
  }),
  new Task({
    id: 2,
    project_id: 1,
    name: 'Meeting'
  }),
  new Task({
    id: 3,
    project_id: 2,
    name: 'Development'
  }),
  new Task({
    id: 4,
    project_id: 2,
    name: 'Meeting'
  })
];

router.route('/')
  .get((req, res) => {
    // Simulate async access.
    // In real app we would check user credentials and load user data from DB.
    setTimeout(() => {
      res.status(200).send(tasks).end();
    }, 50);
  });

export default router;
