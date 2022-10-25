const form = document.getElementById("form")
// console.log(form)

const uname = document.getElementById("uname")

const email = document.getElementById("email")

const phone = document.getElementById("phone")

// we are using mostly document.getElementById("") to get the unique values instead of class values
const password = document.getElementById("password")

const cpassword = document.getElementById("cpassword")

const tandc = document.getElementById("tc")

form.addEventListener('submit',(e)=>{
    // console.log(e) //e means event information
    e.preventDefault()
    //without e.preventDefault() the form will be submitted without validation(without values) 
    //to overcome this event problem we use preventDefault()
    validate()
})

function validate(){
    //we use trim() to remove the white spaces and store the values in our files
    let nameValue = uname.value.trim()
    let emailValue = email.value.trim()
    let phoneValue = phone.value.trim()
    let passwordValue = password.value.trim()
    let cpasswordValue = cpassword.value.trim()

    //user name checking 
    
    if(nameValue===''){
        setError(uname,'user name cannot be empty')
    }
    else if(nameValue.length<3){
        setError(uname,'user name should be minimum 3 characters')
    }
    else if(!nameCheck(nameValue)){
        setError(uname,"Enter a valid name")
    }
    else{
        setSuccess(uname)
    }

    //email check 
    if(emailValue ===''){
        setError(email,'Email cannot be empty')
    }
    else if(!emailCheck(emailValue)){
        setError(email,"Enter a valid Email id")
    }
    else{
        setSuccess(email)
    }
    
    //phonenumber checking
    if(phoneValue ===''){
        setError(phone,'Enter Mobile number')
    }
    else if(phoneValue.length<10){
        setError(phone,'phone number should have 10 numbers')
    }
    else{
        setSuccess(phone)
    }

    //password check
    if(passwordValue===''){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){
        setError(password,'password should be minimum 8 character')
    }else{
        setSuccess(password)
    }

     //cpassword check
     if(cpasswordValue===''){
        setError(cpassword,'password cannot be empty')
    }
    else if(cpasswordValue!= passwordValue){
        setError(cpassword,'password not matched')
    }else{
        setSuccess(password)
    }

    //Terms and conditions 
    // console.log(tandc.checked)
    if(!tandc.checked){
        setError(tc,'click on agree terms checkbox')
    }
    else {
        setSuccess(tc)
    }
    
    function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        small.innerText = message 
        parent.classList.add('error')
        parent.classList.remove('success')
    }

    function setSuccess(input){
        let parent = input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }

    function emailCheck(input){
        let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        let valid = emailReg.test(input)
        console.log(valid)      //true or false
        return valid            //test method returns true or false depends on the user(correct-> true->green)
    }

    function nameCheck(input){
        let nameReg = "^[A-Za-z]\\w{5, 29}$";
    }
}