const express = require('express');
const {
  getPharmacies,
  addPharmacy,
  updatePharmacy,
  deletePharmacy,
} = require('../controllers/pharmacyController');
const router = express.Router();

router.get('/', getPharmacies);
router.post('/', addPharmacy);
router.put('/:id', updatePharmacy);
router.delete('/:id', deletePharmacy);

module.exports = router;