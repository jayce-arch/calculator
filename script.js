function addToInput(val) {
    var result = document.getElementById("result");
    if (val === "+" || val === "-" || val === "*" || val === "/" || val === "%") result.value += " " + val + " ";
    else result.value += val;
}

function clearInput() {
	document.getElementById("result").value = "";
}

function calculate() {
    var input = document.getElementById("result").value;
    var result = eval(input);
    document.getElementById("result").value = result;
}
