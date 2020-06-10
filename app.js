const form = document.querySelector('#form');
const email = document.querySelector('.mail');
const valueofemail = email.value;

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valueofemail = email.value;


    if(!validateEmail(valueofemail)){
        form.classList.add('error');
        document.querySelector('.error-icon').style.display = 'block';
        
        message('Plese provide a vaild email.', 'error-msg');

        setTimeout(clearmsgerr, 3000);


    } else{
        message('success to send mail!!', 'success-msg');

        setTimeout(clearmsgsuc, 3000);

    }
    
    
});



function validateEmail(email){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    return mailformat.test(String(email).toLowerCase());
}


// remove error msg
function clearmsgerr(){

    form.classList.remove('error');
    document.querySelector('.error-icon').style.display = 'none';
    document.querySelector('.error-msg').remove();
    email.value = '';

}
// remove success msg
function clearmsgsuc(){
    document.querySelector('.success-msg').remove();
    email.value = '';
}


// show message

function message (msg, cls) {
    const newmessage = document.createElement('p');
    const sub = document.querySelector('.sub');

        newmessage.className = cls;


    newmessage.appendChild(document.createTextNode(msg));

    form.insertBefore(newmessage, sub.nextSibling);



}
