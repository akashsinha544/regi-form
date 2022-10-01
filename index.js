let globalIsSubmit = false

function validate(isSubmit) {
	if(isSubmit) {
		globalIsSubmit = true
	}
    let counter =0;

	let firstName = document.getElementById('first-name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let confirmPassword = document.getElementById('confirm-password').value

	let tnC = document.getElementById('t-and-c').checked

	if(globalIsSubmit) {
		if(firstName.length >= 3) {
            counter ++;
		document.getElementById('first-name-valid').style.display = 'block'
			document.getElementById('first-name-invalid').style.display = 'none'
		} else {
			document.getElementById('first-name-invalid').style.display = 'block'
			document.getElementById('first-name-valid').style.display = 'none'
		}
	
		if(lastName.length >= 3) {
            counter ++;
			document.getElementById('last-name-valid').style.display = 'block'
			document.getElementById('last-name-invalid').style.display = 'none'
		} else {
			document.getElementById('last-name-invalid').style.display = 'block'
			document.getElementById('last-name-valid').style.display = 'none'
		}
	if (
			email.includes("@") && 
			email.includes(".") && 
			email.indexOf("@") > 0 &&
			email.substr(email.lastIndexOf('.') + 1).length >= 2
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
            counter++;
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
		}

        if((password.length>=8) &&
            (password.includes("@")||password.includes("#")||password.includes("$") )&&(
            password.includes("0")||password.includes("1")||password.includes("2")||password.includes("3")||password.includes("4"))){
            document.getElementById('pass').style.display = "block"
            document.getElementById('pass-invalid').style.display = "none"
            counter++;
        }else{
            document.getElementById('pass-invalid').style.display = "block"
            document.getElementById('pass').style.display = "none"

        }


        if(password !== confirmPassword) {
            document.getElementById('confirm-password-invalid').style.display = 'block'
            
        } else {
            document.getElementById('confirm-password-invalid').style.display = 'none'
            counter++;
        }
	
		
	
		if(tnC) {
			document.getElementById("tNC-invalid").style.display = "none"
            counter ++;
		} else {
			document.getElementById("tNC-invalid").style.display = "block"
		}

        
	}
    if(counter==6){
        alert("your deatils have been saved succesfully")
         
          reset();
  }
  function reset(){
     document.getElementById('first-name').value="";
	 document.getElementById('last-name').value="";
	document.getElementById('email').value="";
	document.getElementById('password').value="";
	document.getElementById('confirm-password').value="";

    document.getElementById('first-name-valid').style.display= 'none'
    document.getElementById('last-name-valid').style.display= 'none'
   document.getElementById('email-valid').style.display = 'none'
   document.getElementById('pass').style.display = 'none'
   document.getElementById("tNC-invalid").style.display = "none"

  }


}