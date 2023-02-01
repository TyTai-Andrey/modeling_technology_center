const { Router } = require('express');
const data = require('./data');
const router = Router();

// /api/monthData
router.get('/', async (req, res) => {
  try {
    res.json({ result: data, total: data.length });
  } catch (e) {
    res.status(500).json({ result: data, total: data.length });
  }
});

module.exports = router;
