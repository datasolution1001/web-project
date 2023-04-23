function validateReservation() {
    let cin = document.querySelector("#cin").value;
    let phone = document.querySelector("#phone").value;
    let pass = document.querySelector("#pass").value;
    let cpass = document.querySelector("#cpass").value;

    
    if(cin.toString().length != 8 ) {
        alert("Cin number must be 8 numbers");
        return false;
    }
    if(phone.toString().length != 8)  {
        alert("Phone number must be 8 numbers");
        return false;
    }
    if (pass != cpass) {
        alert("The Two password in unmatched");
        return false;
    }
   
}


