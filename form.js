const submit =() =>{
//retrive elements from form
const fNameElement =document.getElementById('fname')
const lNameElement =document.getElementById('lname')
const emailElement =document.getElementById('email')
const numberElement =document.getElementById('number')
//console.log(submit)
//retrive the values
const fname = fNameElement.value;
const lname = lNameElement.value;
const email = emailElement.value;
const number = numberElement.value;
const submit = [fname,lname,email,number]
//do some checks on inputs
if (fname == '') {
    alert('please enter your first name')
}
if (lname ==''){
    alert('please enter your last name')
}
if (email == ''){
    alert('please enter your email')
}
if (number == ''){
    alert('please enter your number')
}
else {
    alert('well done')

}
console.log(submit)

}