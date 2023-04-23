function validate(){

    const firstDate = document.querySelector('#date1').value;
    const secondDate = document.querySelector('#date2').value;
    const firstDateObj = new Date(firstDate);
    const secondDateObj = new Date(secondDate);
    if (firstDateObj > secondDateObj) {
       alert("Enter A valid Dates");
       return false;
      }
    

      
  }
  
 




