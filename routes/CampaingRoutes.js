const express = require('express')
const {getCampaings,
    getSingleCampaing,
    updateCampaing,
    deleteCampaing,
    createCampaing,
    getCampaingsByMarca,
    getCampaingsByEstadoAndMarca
} = require('../controllers/CampaingController')

const router = express.Router()

router.route('/')
.post(createCampaing)

router.route('/:id')
.get(getSingleCampaing)
.put(updateCampaing)
.delete(deleteCampaing)

router.route('/estado/:estado').get(getCampaings)
router.route('/marca/:marca').get(getCampaingsByMarca)
router.route('/marcaEstado').post(getCampaingsByEstadoAndMarca)
module.exports = router