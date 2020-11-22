//onclick of submit button replace function will be executed
function replace(){

let Myform1 = document.getElementById("form1");
//getting the element by id "form1"
let replacedform = document.getElementById("Rform");
//getting id to replace form when submit button is clicked
let name = document.getElementById('FName').value;
//getting the element by id "fname" and its value
let EmailAddress = document.getElementById('emailid').value;
//getting the element by id "emailid" and its value
let MobileNumber = document.getElementById('mobilenumber').value;
//getting the element by id "mobilenumber" and its value
let countrry = document.getElementById("country").optSelected;
//getting the element by id "country" and its selected index
let errorName = document.getElementById("error1");
//to display error for name
let errorEmail = document.getElementById("error2");
//to display error for email
let errornumber = document.getElementById("error3");
//to display error for number
let countryerror = document.getElementById("error4");
//to display error for country
let text;   

//checks if name is empty or no, if empty, then display some message to user
if(name == ""){
    text = "Name Is Required";
    errorName.innerHTML = text;
//    return false;
}else{
    errorName.style.display= "none";
}

//checks if email is empty or no, if empty, then display some message to user
if(EmailAddress.indexOf("@") == -1 || EmailAddress.length < 6){
   text = "Email Is Required <br> Please Enter Valid Email";
   errorEmail.innerHTML = text;
//   return false;
}else{
    errorEmail.style.display= "none";
}

//checks if mobile  number is empty or no, if empty, then display some message to user
if(isNaN(MobileNumber) || MobileNumber.length != 10){
    text = "Please Enter Valid Phone Number";
    errornumber.innerHTML = text;
    //returns false so, the form doesn't get submitted .
    return false;
}else{
    errornumber.style.display= "none";
} 

//checks if country is empty or no, if empty,then display some message to user
//if(countrry=="Nationality"){
//    text = "Please Select Country";
//    countryerror.innerHTML = text;
//    return false;
//}else{
//    countryerror.style.display= 'none';
//}
    

//if form is not there then onclick it will appear
if(Myform1.style.display == "none"){
    
    Myform1.style.display = "block";

// else if form is already there on click it will disappear and display the replacedform which contains the thanking message
}else{
    
//    text = "THANK YOU FOR REGISTERING! /n Please check your mail inbox for the generated code.";
    replacedform.style.display = "block";
    Myform1.style.display = "none";

}

//    replacedform.innerHTML = text;
    
    // return true . so, form now can be submitted after validation
    return true;
    
}

    