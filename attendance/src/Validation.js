import React from 'react'

const Validation = (inputs) => {

    let errors={};
    let c=0;

    
    let regex3 = /^([0-9]){11}$/;
    let str3 = inputs.username;
  if (regex3.test(str3)) {
    console.log("it matched");
  } else {
    errors.username = "sap-id should have 11 digits";
    c++;
  }
  
    let regex4=  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  let str4=inputs.password;
  if (regex4.test(str4)) {
    console.log("it matched");
  } else {
    errors.password = "*Password should have at least one Upper Case, one Digit and one Special Character";
    c++;
 
  }
  
  if(c==0)
  {
    alert('success');
  }
    return errors;
}


export default Validation
