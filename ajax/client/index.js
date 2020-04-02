console.log("UP AND RUNNING!");
let FirstName = document.getElementById("firstname");
let LastName = document.getElementById("lastname");
let AGE = document.getElementById("age");
let RESPONSE = document.getElementById("SUBMIT");
let LoadData = document.getElementById("DataFromFile");

function Ajax() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("RESPONSE").innerHTML = this.responseText;
        }
    }
    xmlhttp.open("GET", "data.txt", true)
    xmlhttp.send()
}

function Ajax2() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("RESPONSE").innerHTML = this.responseText;
        }
    }

    let httplink = "../server/InputCompleter.php?firstname=" + FirstName.value + "&lastname=" + LastName.value + "&age=" + AGE.value;
    alert(httplink);

    xmlhttp.open("GET", httplink, true)
    xmlhttp.send()
}

LoadData.addEventListener("click", function () {
    Ajax();
});

RESPONSE.addEventListener("click", function () {
    Ajax2();
});
