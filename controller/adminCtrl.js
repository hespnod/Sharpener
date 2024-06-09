const Apointment = require('../models/apointmentmodel');

const addAppointment = async (req,res,next)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.pno;

    const data = await Apointment.create({name:name,email:email,phone:phone});
    res.status(201).json({details:data});
};


module.exports = {addAppointment};