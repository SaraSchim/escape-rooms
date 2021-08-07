//checks if the name contains only letters
function nameValidator(name) {
    if (name === "") {
        return true;
    }
    if (typeof name !== "undefined") {
        if (name.match("^[A-Za-z\u0590-\u05FF ]+$")) {
            return true;
        }
    }
    return false;
}



//checks if the email contains a @...
function emailValidator(email) {
    if (email === "") {
        return true;
    }
    var format = /\S+@\S+\.\S+/;
    return format.test(email);
}

//checks if the phone number is valid
function phoneValidator(phone) {
    if (phone === "") {
        return true;
    }
    if (isNaN(phone) || phone[0] !== "0") {
        return false;
    }
    if (phone.length === 10 || phone.length === 9) {
        return true;
    }
    return false;
}

function checkCreditNumber(creditNumber){ 
    const inNumber = Number(creditNumber); //check that is a number
    if(isNaN(inNumber)){
        return false;
    }
    const lenpCreditNumber = creditNumber.length; //the appropriate length for a credit number
    if(lenpCreditNumber > 7 && lenpCreditNumber < 16){
        return true;
    }
    return false;
}

function checkCreditDate(creditDate){
    const dateInNumber = Number(creditDate); //check that is a number
    if(isNaN(dateInNumber)){
        return false;
    }
    const lenpCreditDate = creditDate.length;
    if(lenpCreditDate === 4){ //checks if has 4 numbers
        return true;
    }
    return false;
}



function checkCreditThreeNumBackCrad(creditthree){
    const threeNumInNumber = Number(creditthree);
    if(isNaN(threeNumInNumber)){
        return false;
    }
    const lenpCreditThreeNum = creditthree.length;
    if(lenpCreditThreeNum === 3){ //checks if has 3 numbers
        return true;
    }
    return false;
}
export {  }



export {
    nameValidator,
    emailValidator,
    phoneValidator, checkCreditThreeNumBackCrad, checkCreditDate,
    checkCreditNumber
};

