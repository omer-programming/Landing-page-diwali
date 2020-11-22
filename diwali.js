//write code here
function replace(){

let Myform1 = document.getElementById("form1");
let replacedform = document.getElementById("Rform");
let name = document.getElementById('FName').value;
let EmailAddress = document.getElementById('emailid').value;
let MobileNumber = document.getElementById('mobilenumber').value;
let countrry = document.getElementById("country").optSelected;
let errorName = document.getElementById("error1");
let errorEmail = document.getElementById("error2");
let errornumber = document.getElementById("error3");
let countryerror = document.getElementById("error4");
let text;   
    
if(name == ""){
    text = "Name Is Required";
    errorName.innerHTML = text;
//    return false;
}else{
    errorName.style.display= "none";
}
    
if(EmailAddress.indexOf("@") == -1 || EmailAddress.length < 6){
   text = "Email Is Required <br> Please Enter Valid Email";
   errorEmail.innerHTML = text;
//   return false;
}else{
    errorEmail.style.display= "none";
}
    
if(isNaN(MobileNumber) || MobileNumber.length != 10){
    text = "Please Enter Valid Phone Number";
    errornumber.innerHTML = text;
    return false;
}else{
    errornumber.style.display= "none";
} 
    
//if(countrry=="Nationality"){
//    text = "Please Select Country";
//    countryerror.innerHTML = text;
//    return false;
//}else{
//    countryerror.style.display= 'none';
//}
    
    
if(Myform1.style.display == "none"){
    
    Myform1.style.display = "block";
    
}else{
    
//    text = "THANK YOU FOR REGISTERING! /n Please check your mail inbox for the generated code.";
    replacedform.style.display = "block";
    Myform1.style.display = "none";

}

//    replacedform.innerHTML = text;
    
    return true;
    
}

    