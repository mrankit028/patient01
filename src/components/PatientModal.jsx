// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import './PatientModal.css';

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{patient.name}</h2>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          <div className="modal-body">
            <div className="detail-row">
              <strong>Age:</strong> {patient.age} years old
            </div>
            <div className="detail-row">
              <strong>Contact:</strong> {patient.contact}
            </div>
            <div className="detail-row">
              <strong>Username:</strong> {patient.username}
            </div>
            <div className="detail-row">
              <strong>Phone:</strong> {patient.phone}
            </div>
            <div className="detail-row">
              <strong>Website:</strong> <a href={`http://${patient.website}`} target="_blank" rel="noopener noreferrer">{patient.website}</a>
            </div>
            <div className="detail-row">
              <strong>Address:</strong>
              <p>
                {patient.address.street}, {patient.address.suite}<br />
                {patient.address.city}, {patient.address.zipcode}
              </p>
            </div>
            <div className="detail-row">
              <strong>Company:</strong> {patient.company.name}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PatientModal;
