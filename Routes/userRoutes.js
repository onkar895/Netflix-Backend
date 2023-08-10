import { Router } from 'express'
import { addToLikedMovies, getLikedMovies, removeFromLikedMovies } from '../Controllers/userController.js'

const router = Router()

router.post('/add', addToLikedMovies)
router.get('/liked/:email', getLikedMovies)
router.put('/remove', removeFromLikedMovies)

export default router
