var input = document.getElementById("frm1");
input.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        var x = document.getElementById("frm1");
        var text;
        text = x.elements[0].value;
        var person = document.getElementById("form2");
        var numberOfPersons = person.elements[0].value;
        if (numberOfPersons > 0 && text > 0) {
            division = text / numberOfPersons;
            if (tipAmount <= 0) {
                tipAmount = document.getElementById('customTip').elements[0].value;
                // var incomingTip;
                // incomingTip = (text * tipAmount) / (numberOfPersons * 100);
                if (tipAmount >= 0) {
                    var incomingTip;
                    incomingTip = (text * tipAmount) / (numberOfPersons * 100);
                } else {
                    window.alert("Tip must be greater than or equal to zero");
                    incomingTip = 0;
                }
            } else {
                var incomingTip;
                incomingTip = (text * tipAmount) / (numberOfPersons * 100);
            }
            document.getElementById('spanElement1').innerHTML = incomingTip.toFixed(2);
            document.getElementById("spanElement2").innerHTML = division.toFixed(2);
            document.getElementById('button').style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById('button').style.opacity = "100%";
            document.getElementById('button').classList.add('hover');
        }
        if (numberOfPersons < 0) {
            window.alert("Number Of persons Must be greater than 0");
        }
        if (text < 0) {
            window.alert("Bill Must be greater than 0");
        }
        if (numberOfPersons == 0 || text == 0) {
            void 0;
        }
    }
});

var input3 = document.getElementById("customTip");
input3.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        var x = document.getElementById("frm1");
        var text;
        text = x.elements[0].value;
        var person = document.getElementById("form2");
        var numberOfPersons = person.elements[0].value;

        if (numberOfPersons > 0 && text > 0) {
            division = text / numberOfPersons;
            if (tipAmount <= 0) {
                tipAmount = document.getElementById('customTip').elements[0].value;
                // var incomingTip;
                // incomingTip = (text * tipAmount) / (numberOfPersons * 100);
                if (tipAmount >= 0) {
                    var incomingTip;
                    incomingTip = (text * tipAmount) / (numberOfPersons * 100);
                } else {
                    window.alert("Tip must be greater than or equal to zero");
                    incomingTip = 0;
                }
            } else {
                var incomingTip;
                incomingTip = (text * tipAmount) / (numberOfPersons * 100);
            }
            document.getElementById('spanElement1').innerHTML = incomingTip.toFixed(2);
            document.getElementById("spanElement2").innerHTML = division.toFixed(2);
            document.getElementById('button').style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById('button').style.opacity = "100%";
            document.getElementById('button').classList.add('hover');
        }
        if (numberOfPersons < 0) {
            window.alert("Number Of Persons Must be greater than 0");
        }
        if (text < 0) {
            window.alert("Bill Must be greater than 0");
        }
        if (numberOfPersons == 0 || text == 0) {
            void 0;
        }
    }
});

var input2 = document.getElementById("form2");
input2.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        event.preventDefault();
        var x = document.getElementById("frm1");
        var text;
        text = x.elements[0].value;
        var person = document.getElementById("form2");
        var numberOfPersons = person.elements[0].value;
        if (numberOfPersons > 0 && text > 0) {
            division = text / numberOfPersons;
            if (tipAmount <= 0) {
                customTipValue = document.getElementById('customTip').elements[0].value;
                tipAmount = customTipValue;
                if (tipAmount >= 0) {
                    var incomingTip;
                    incomingTip = (text * tipAmount) / (numberOfPersons * 100);
                } else {
                    window.alert("Tip must be greater than or equal to zero");
                    incomingTip = 0;
                }
            } else {
                var incomingTip;
                incomingTip = (text * tipAmount) / (numberOfPersons * 100);
            }
            document.getElementById('spanElement1').innerHTML = incomingTip.toFixed(2);
            document.getElementById("spanElement2").innerHTML = division.toFixed(2);
            document.getElementById('button').style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById('button').style.opacity = "100%";
            document.getElementById('button').classList.add('hover');
        }

        // if (numberOfPersons < 0 || text < 0) {
        //     window.alert("Inputs Must be greater than 0");
        // }
        if (numberOfPersons < 0) {
            window.alert("Number Of Persons Must be greater than 0");
        }
        if (text < 0) {
            window.alert("Bill Must be greater than 0");
        }
        if (numberOfPersons == 0 || text == 0) {
            void 0;
        }

    }
});

function reset() {
    document.getElementById('spanElement1').innerHTML = "0.00";
    document.getElementById('spanElement2').innerHTML = "0.00";
    document.getElementById('frm1').elements[0].value = "";
    document.getElementById('form2').elements[0].value = "";
    document.getElementById('button').style.backgroundColor = "hsla(172, 67%, 45%, 0.39)";
    document.getElementById('button').style.opacity = "50%";
    document.getElementById('button').classList.remove('hover');
    document.getElementById('tip1').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
    document.getElementById('customTip').style.border = "none";
    document.getElementById('customTip').elements[0].value = "";
    document.getElementById('customTip').elements[0].placeHolder = "Custom";
    document.getElementById('firstInput').style.outline = "none";
    document.getElementById('billInput').style.outline = "none";
    tipAmount = 0;
}

var tipAmount;
tipAmount = 0;

function fivePercent() {
    tipAmount = 5;
    document.getElementById('tip1').style.backgroundColor = " hsl(172, 67%, 45%)";
    document.getElementById('tip1').style.color = "hsl(186, 14%, 43%)";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
}

function tenPercent() {
    tipAmount = 10;
    document.getElementById('tip2').style.backgroundColor = " hsl(172, 67%, 45%)";
    document.getElementById('tip2').style.color = "hsl(186, 14%, 43%)";
    document.getElementById('tip1').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
}

function fifteenPercent() {
    tipAmount = 15;
    document.getElementById('tip3').style.backgroundColor = " hsl(172, 67%, 45%)";
    document.getElementById('tip3').style.color = "hsl(186, 14%, 43%)";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip1').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
}

function twentyFivePercent() {
    tipAmount = 25;
    document.getElementById('tip4').style.backgroundColor = " hsl(172, 67%, 45%)";
    document.getElementById('tip4').style.color = "hsl(186, 14%, 43%)";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip1').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
}

function fiftyPercent() {
    tipAmount = 50;
    document.getElementById('tip5').style.backgroundColor = " hsl(172, 67%, 45%)";
    document.getElementById('tip5').style.color = "hsl(186, 14%, 43%)";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip1').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
}


function custom() {
    document.getElementById('tip1').style.backgroundColor = "hsl(183, 100% , 15%)";
    document.getElementById('tip1').style.color = "white";
    document.getElementById('tip2').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip2').style.color = "white";
    document.getElementById('tip3').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip3').style.color = "white";
    document.getElementById('tip4').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip4').style.color = "white";
    document.getElementById('tip5').style.backgroundColor = " hsl(183, 100% , 15%)";
    document.getElementById('tip5').style.color = "white";
}

function activeStatus1() {
    document.getElementById('billInput').style.outline = "2px solid hsl(172, 67%, 45%)";
    document.getElementById('firstInput').style.outline = "none";
}

function activeStatus2() {
    document.getElementById('firstInput').style.outline = "2px solid hsl(172, 67%, 45%)";
    document.getElementById('billInput').style.outline = "none";
}