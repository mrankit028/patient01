// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './PatientCard.css';

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <motion.div
      className="patient-card"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="card-header">
        <h3>{patient.name}</h3>
        <span className="age">{patient.age} years old</span>
      </div>
      <div className="card-body">
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Username:</strong> {patient.username}</p>
      </div>
      <button
        className="view-details-btn"
        onClick={() => onViewDetails(patient)}
      >
        View Details
      </button>
    </motion.div>
  );
};

export default PatientCard;
