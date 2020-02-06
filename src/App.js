import React from 'react';
var QRCode = require('qrcode.react');
// var ReactDOM = require('react-dom');
var Barcode = require('react-barcode');

function App() {

  // QR GENERATOR
  const payload = 
  {
      cargo: [
          {
              name: "apples",
              amount: "4",
              id: "7876785757",
              package: "box"
          },
          {
              name: "melons",
              amount: "10",
              id: "1232334231",
              package: "box"
          },
          {
              name: "pineapples",
              amount: "30",
              id: "5656678878",
              package: "box"
          },
          {
              name: "oranges",
              amount: "5",
              id: "9770987684",
              package: "box"
          }
      ],
      id: "5555555555",
      carNumber: "EZ-2454",
      ownerInfo: "E3423434T56",
      warehouseLicense: "5555555555",
      dataOfRegistration: "2020-01-30T09:28:31.320Z",
      service: "express_cargo",
  };
  const data = JSON.stringify(payload);

  // Back parse
  const newData = JSON.parse(data); 
  console.log(newData);

  ///////////////
 return (
  <div>
    <QRCode value={data}  size={200}/>  
    <Barcode value="123456789"  width={2} />   
  </div>  
 );
}

export default App;
