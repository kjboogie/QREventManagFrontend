import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Import QrReader directly
import axios from 'axios';

const QrVerify  = ({ onScan }) => {
    const handleScan = (data) => {
        if (data) {
            onScan(data); // Pass the scanned data to the parent component
        }
    };

    const handleError = (error) => {
        console.error('QR Scan Error:', error);
    };

    return (
        <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
        />
    );
};

export default QrVerify ;
