import React, { useState } from 'react';
import axios from 'axios';

const FetchQR = () => {
    const [identifier, setIdentifier] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { value } = e.target;
        setIdentifier(value);
    };

    const fetchQRCode = async () => {
        if (!identifier) {
            setError('Please enter an email or phone.');
            return;
        }

        try {
            setError('');
            const response = await axios.get(`http://localhost:5000/get_qr?email=${encodeURIComponent(identifier)}`);
            const blob = new Blob([response.data], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qr_code.png';
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            setError('Error fetching QR code.');
        }
    };

    return (
        <div>
            <h2>Fetch QR Code</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter email or phone"
                    value={identifier}
                    onChange={handleInputChange}
                />
                <button onClick={fetchQRCode}>Fetch QR Code</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default FetchQR;
