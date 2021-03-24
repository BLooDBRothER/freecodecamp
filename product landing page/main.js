function changeSelecthd() {
    const db = document.getElementById("size");
    const pt = document.getElementById("price");
    if (db.value == "1") {
        pt.innerHTML = "&#8377; 2500"
    } 
    else if (db.value == "2") {
        pt.innerHTML = "&#8377; 3500"
    }
     else if (db.value == "3") {
        pt.innerHTML = "&#8377; 5200"
    } 
    else if (db.value == "4") {
        pt.innerHTML = "&#8377; 7200"
    }
}

function changeSelectshd() {
    const db = document.getElementById("size2");
    const pt = document.getElementById("price2");
    if (db.value == "1") {
        pt.innerHTML = "&#8377; 7000"
    } 
    else if (db.value == "2") {
        pt.innerHTML = "&#8377; 11200"
    }
}

function changeSelectsd() {
    const db = document.getElementById("size3");
    const pt = document.getElementById("price3");
    if (db.value == "1") {
        pt.innerHTML = "&#8377; 4500"
    } 
    else if (db.value == "2") {
        pt.innerHTML = "&#8377; 7500"
    }
     else if (db.value == "3") {
        pt.innerHTML = "&#8377; 24000"
    } 
    else if (db.value == "4") {
        pt.innerHTML = "&#8377; 40000"
    }
}