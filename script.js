function SendEmail(){
    (function () {
        emailjs.init("user_PQLnOPIqy0awCPfm5hZbS");
    })();

    var templateParams = {
        tipo: document.getElementById("servizio").value,
        nome: document.getElementById("nominativo").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        messaggio: document.getElementById("messaggio").value
    };

    emailjs.send('service_qnfrq9d', 'template_l5t6mhh', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

function SetColor(){
    input = document.getElementById("servizio");
    
    if(input.value == ""){
        input.style.color = "#888";
    }
    else{
        input.style.color = "#000";
    }
}
