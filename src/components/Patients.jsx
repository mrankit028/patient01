import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PatientCard from './PatientCard';
import PatientModal from './PatientModal';
import AddPatientForm from './AddPatientForm';
import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const filtered = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPatients(filtered);
  }, [patients, searchQuery]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      // Mock data with Indian names and valid Gmail emails
      const mockPatients = [
        { id: 1, name: 'Amit Sharma', username: 'amit.sharma', email: 'amit.sharma@gmail.com', phone: '9876543210', website: 'amitsharma.com', address: { street: 'MG Road', suite: 'Apt 101', city: 'Mumbai', zipcode: '400001' }, company: { name: 'Tech Solutions' } },
        { id: 2, name: 'Priya Patel', username: 'priya.patel', email: 'priya.patel@gmail.com', phone: '9876543211', website: 'priyapatel.com', address: { street: 'Brigade Road', suite: 'Apt 202', city: 'Bangalore', zipcode: '560001' }, company: { name: 'Design Studio' } },
        { id: 3, name: 'Rajesh Kumar', username: 'rajesh.kumar', email: 'rajesh.kumar@gmail.com', phone: '9876543212', website: 'rajeshkumar.com', address: { street: 'Park Street', suite: 'Apt 303', city: 'Kolkata', zipcode: '700001' }, company: { name: 'Consulting Ltd' } },
        { id: 4, name: 'Sneha Gupta', username: 'sneha.gupta', email: 'sneha.gupta@gmail.com', phone: '9876543213', website: 'snehagupta.com', address: { street: 'Connaught Place', suite: 'Apt 404', city: 'Delhi', zipcode: '110001' }, company: { name: 'Media Corp' } },
        { id: 5, name: 'Vikram Singh', username: 'vikram.singh', email: 'vikram.singh@gmail.com', phone: '9876543214', website: 'vikramsingh.com', address: { street: 'Anna Salai', suite: 'Apt 505', city: 'Chennai', zipcode: '600001' }, company: { name: 'Engineering Works' } },
        { id: 6, name: 'Anjali Desai', username: 'anjali.desai', email: 'anjali.desai@gmail.com', phone: '9876543215', website: 'anjalidesai.com', address: { street: 'FC Road', suite: 'Apt 606', city: 'Pune', zipcode: '411001' }, company: { name: 'Healthcare Services' } },
        { id: 7, name: 'Rohan Mehta', username: 'rohan.mehta', email: 'rohan.mehta@gmail.com', phone: '9876543216', website: 'rohanmehta.com', address: { street: 'Sector 17', suite: 'Apt 707', city: 'Chandigarh', zipcode: '160017' }, company: { name: 'Finance Advisors' } },
        { id: 8, name: 'Kavita Joshi', username: 'kavita.joshi', email: 'kavita.joshi@gmail.com', phone: '9876543217', website: 'kavitajoshi.com', address: { street: 'Banjara Hills', suite: 'Apt 808', city: 'Hyderabad', zipcode: '500034' }, company: { name: 'Education Institute' } },
        { id: 9, name: 'Arjun Rao', username: 'arjun.rao', email: 'arjun.rao@gmail.com', phone: '9876543218', website: 'arjunrao.com', address: { street: 'MG Road', suite: 'Apt 909', city: 'Jaipur', zipcode: '302001' }, company: { name: 'Retail Chain' } },
        { id: 10, name: 'Meera Nair', username: 'meera.nair', email: 'meera.nair@gmail.com', phone: '9876543219', website: 'meeranair.com', address: { street: 'Marine Drive', suite: 'Apt 1010', city: 'Kochi', zipcode: '682001' }, company: { name: 'Tourism Agency' } }
      ];
      const patientsWithAge = mockPatients.map(patient => ({
        ...patient,
        age: Math.floor(Math.random() * 60) + 20, // Random age between 20-80
        contact: patient.email
      }));
      setPatients(patientsWithAge);
      setFilteredPatients(patientsWithAge);
    } catch {
      setError('Failed to fetch patients. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  const handleAddPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: patients.length + 1,
      age: parseInt(newPatient.age),
      contact: newPatient.contact
    };
    setPatients([...patients, patient]);
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="loading">
        <motion.div
          className="spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading patients...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={fetchPatients}>Retry</button>
      </div>
    );
  }

  return (
    <motion.div
      className="patients"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="patients-header">
        <h2>Patient Records</h2>
        <div className="search-add">
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button
            className="add-button"
            onClick={() => setShowAddForm(true)}
          >
            Add New Patient
          </button>
        </div>
      </div>

      <motion.div
        className="patients-grid"
        layout
      >
        {filteredPatients.map((patient, index) => (
          <motion.div
            key={patient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <PatientCard
              patient={patient}
              onViewDetails={handleViewDetails}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={handleCloseModal}
        />
      )}

      {showAddForm && (
        <AddPatientForm
          onAdd={handleAddPatient}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </motion.div>
  );
};

export default Patients;
