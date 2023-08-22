import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FetchQR from './FetchQR';
import QRForm from './QRForm';
import QrVerify from './QrVerify'; // Import the QrVerify component

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>QR Event Management</h1>
                </header>
                <nav>
                    <ul className="navigation">
                        <li><Link to="/fetch">Fetch QR</Link></li>
                        <li><Link to="/qrform">QR Form</Link></li>
                        <li><Link to="/verify">Verify QR</Link></li> {/* Add this line */}
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/fetch" element={<FetchQR />} />
                        <Route path="/qrform" element={<QRForm />} />
                        <Route path="/verify" element={<QrVerify />} /> {/* Add this line */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
