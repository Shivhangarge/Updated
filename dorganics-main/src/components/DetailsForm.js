
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../src/styles/DetailsForm.css';

const DetailsForm = () => {
    const location = useLocation();
  
    // Destructure the received state from location
    const { currentWeight, desiredWeight, height } = location.state || {};
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        currentWeight: currentWeight || '', // Set default values from passed data
        desiredWeight: desiredWeight || '',
        height: height || ''
    });
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, like sending data to an API
        console.log('Form Data Submitted:', formData);
        navigate('/FeSummary', { state: formData });
    };

    return (
        <div className="box-Container">
            <h4>Personal Details</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <tag htmlFor="name">Name</tag> {/* Changed label to tag */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <tag htmlFor="contact">Contact Number</tag> {/* Changed label to tag */}
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <tag htmlFor="email">Email</tag> {/* Changed label to tag */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default DetailsForm;
