function formData () {
    let left = document.getElementById("left").value;
    let right = document.getElementById("right").value;
    let operator = document.getElementById("operator").value;

    let json = {
        left: left,
        right: right,
        operator: operator
    };
    return JSON.stringify(json);
}

function result(text){
    document.getElementById('result').value = text;
}

function displayResult(){
    let request = new XMLHttpRequest();
    let json = formData();


    request.open("POST", "http://localhost:3000/");
    request.setRequestHeader('Content-Type', 'application/json');
    request.onreadystatechange = () => {
            const jsonObj = JSON.parse(request.responseText);
            result(jsonObj.result);
        }
    request.send(json);
}

