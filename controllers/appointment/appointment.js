const db = require('../../models');

const Doctor = db.doctors;
const Patient = db.patients;
const Appointment = db.applications;



module.exports = {
    async createAppointment = (req, res) => {
        return await Appointment.create({
            ...req.body,
            doctor_id: req.doctorId
        })
        .then((res) => res.status(200).send(res))
        .catch((error) => res.status(400).send(error));
    }
}