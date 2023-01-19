
const userName = document.querySelector(".username");
const userEmail = document.querySelector(".email");
const userDate = document.querySelector(".date");
const submit = document.querySelector(".submit");

function validate(){
    
    submit.addEventListener("click", (e)=> {
    e.preventDefault();

    if(userName.value == "" || userEmail.value == "" || userDate.value == ""){
        inputempty()
    }else{
        sendmail(userName.value, userEmail.value, userDate.value);
        success();
    }
    })
}
validate()

function sendmail(name, email, userDate){
    emailjs.send("service_qmq46nh","template_31gxxic",{
        from_name: name,
        to_name: email,
        message:` I want to book an appointment at: ${userDate}` ,
    });
}

function success(){
    clearInputFields();
    swal({
        title: "Thank you!",
        text: "Successfully sent message!",
        icon: "success",
        button: "OK!",
    });

}


function error(){
    swal({
        title: "Oops...!",
        text: "Something went wrong!",
        icon: "error",
        button: "OK!",
    });
}


function inputempty(){
    swal({
        title: "Oops...!",
        text: "Input fields are required!",
        icon: "error",
        button: "OK!",
    });
}

function clearInputFields(){
    userName.value = '';
    userEmail.value = '';
    userDate.value = '';

}