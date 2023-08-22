import React, { useState } from 'react';
import axios from 'axios';

const QRForm = () => {


  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateQRCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate_qr', formData, {
        responseType: 'blob',
      });
      const blob = new Blob([response.data], { type: 'image/png' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qr_code.png';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  return (
    <div>
      <h2>Generate QR Code</h2>
      <form>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={generateQRCode}>
          Generate QR Code
        </button>
      </form>
    </div>
  );
};

export default QRForm;
