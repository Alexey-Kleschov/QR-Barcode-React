import React from 'react';
var QRCode = require('qrcode.react');
var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');

function App() {

  // QR GENERATOR
  const payload = {
    name: 'Alex',
    age: 29,
    job: 'Programmer'
  };
  const data = JSON.stringify(payload);
 return (
  <div>
    <QRCode value={data}  size={200}/>  
    <Barcode value="12681436513658"  width={2}/>   
  </div>  
 );
}

export default App;
