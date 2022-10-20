const additionFunction =(inputOne, inputTwo) =>{
    return inputOne + inputTwo
}
const SubtractFunction =(inputone,inputTwo) => {
    return inputone -inputTwo;
}
const divisionFunction =(inputOne,inputTwo) => {
    return inputOne/inputTwo;
}
const multiplicationFunction =(inputOne,inputTwo) => {
    return inputOne*inputTwo;
    }
const myCalculatorProgram =() => {
    //Ask user for input one
    const numberone =prompt('please state the first number');
    //Ask user for input two
    const numbertwo =prompt('please state the second number');
    //Ask user for operation they want to be done
    const operation =prompt('please state the operation');
    //Perform the operation based on the type specified above
    if (operation =='+') {
       result = additionFunction(numberone,numbertwo)
    }
    if (operation =='-') {
        result = SubtractFunction(numberone,numbertwo)

    }
    if (operation =='/') {
        result = divisionFunction(numberone,numbertwo)
    }
      if(operation =='*') {
        result = multiplicationFunction(numberone,numbertwo)
    }
    console.log ('Based on your operation','The result is',result)
}
 