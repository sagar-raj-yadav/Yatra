
import  express from 'express';
const router = express.Router();
import authorization from '../middleware/authorization.js';
import {signup,login,getprofile,updateprofile,deleteprofile} from '../controller/authenticationController.js';

router.post('/signup',authorization,signup);
router.post('/login',authorization,login);
router.get('/getprofile',authorization,getprofile);
router.put('/updateprofile',authorization,updateprofile);
router.delete('/deleteprofile',authorization,deleteprofile);


export default router;