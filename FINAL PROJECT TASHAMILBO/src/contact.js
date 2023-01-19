const userName = document.querySelector(".username");
const userEmail = document.querySelector(".email");
const userMsg = document.querySelector(".message");
const submit = document.querySelector(".submit");

function validate(){
    
    submit.addEventListener("click", (e)=> {
    e.preventDefault();

    if(userName.value == "" || userEmail.value == "" || userMsg.value == ""){
        inputempty()
    }else{
        sendmail(userName.value, userEmail.value, userMsg.value);
        success();
    }
    })
}
validate()

function sendmail(name, email, userMsg){
    emailjs.send("service_qmq46nh","template_31gxxic",{
        from_name: name,
        to_name: email,
        message: userMsg,
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
    userMsg.value = '';

}


