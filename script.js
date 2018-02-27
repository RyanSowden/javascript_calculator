var firstnumber;
var secondnumber;
var result;
var operation;

//Functions below make number one through nine appear on the display when the buttons is pushed

function numone(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "1";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "1";
    };
};

function numtwo(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result) 
    {
        document.calculator.dis.value = "2";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "2";
    };
};

function numthree(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "3";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "3";
    };
};

function numfour(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "4";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "4";
    };
};

function numfive(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "5";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "5";
    };
};

function numsix(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "6";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "6";
    };
};

function numseven(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "7";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "7";
    };
};

function numeight(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "8";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "8";
    };
};

function numnine(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "9";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "9";
    };
};

function numzero(){
    if (document.calculator.dis.value == "0")
    {
        document.calculator.dis.value = "0";
    } else if (document.calculator.dis.value == result)
    {
        document.calculator.dis.value = "0";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + "0"
    };
};

function point(){
    if(document.calculator.dis.value == "0" || document.calculator.dis.value == result)
    {
        document.calculator.dis.value = ".";
    } else if (document.calculator.dis.value != "0")
    {
        document.calculator.dis.value = document.calculator.dis.value + ".";
    };
};
//Function to clear the screen

function allclr(){
    document.calculator.dis.value = "0";
    return;
};

//function to clear last digit

function clrone(){
    document.calculator.dis.value = document.calculator.dis.value.slice(0, -1);
    return;
};

//function to add numbers

function operationplus(){
    operation = "+";
    firstnumber = parseFloat(document.calculator.dis.value);
    document.calculator.dis.value = " ";
};

//function to subtract numbers

function operationminus(){
    operation = "-";
    firstnumber = parseFloat(document.calculator.dis.value);
    document.calculator.dis.value = " ";
};

//function to multiply numbers

function operationmult(){
    operation = "X";
    firstnumber = parseFloat(document.calculator.dis.value);
    document.calculator.dis.value = " ";
};


//function to divide numbers

function operationdivid(){
    operation = "÷";
    firstnumber = parseFloat(document.calculator.dis.value);
    document.calculator.dis.value = " ";
};

//function to get percent

function operationperc(){
    operation = "%";
    firstnumber = parseFloat(document.calculator.dis.value);
    document.calculator.dis.value = " ";
};

//function to get result

function equalsto(){
    secondnumber = parseFloat(document.calculator.dis.value);
    if (operation == "+"){
        result = firstnumber + secondnumber;
    }else if (operation == "-"){
        result = firstnumber - secondnumber;
    }else if (operation == "X"){
        result = firstnumber *  secondnumber;
    }else if (operation == "÷"){
        result = firstnumber / secondnumber;
    }else if (operation == "%"){
        if (document.calculator.dis.value == "0"){
            result = firstnumber / 100;
        }else if (document.calculator.dis.value != "0"){
            result = firstnumber / secondnumber * 100;
        
        };
    
    };
    document.calculator.dis.value = "";
    document.calculator.dis.value = result.toString();
    return;

};