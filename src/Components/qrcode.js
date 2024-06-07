import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

const QRCodeComponent = ({ text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, { width: 200, margin: 1, color: {
        dark: '#000000',  // Blue dots
        light: '#0000' // Transparent background
      } }, (error) => {
        if (error) console.error(error);
        console.log('QR Code generated!');
      });
    }
  }, [text]);

  return (
    <div className="qr-code-container">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default QRCodeComponent;