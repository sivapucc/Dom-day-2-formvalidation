//create container
let con = document.createElement("div");
con.setAttribute("class", "container");
document.body.append(con);

//create row
let row = document.createElement("div");
//row.setAttribute("class", "row");
row.classList.add("row", "form-group");
con.appendChild(row);

//create colums
let col1 = document.createElement("div");
col1.setAttribute("class", "col-lg-4");
col1.setAttribute("id", "box");

let col2 = document.createElement("div");
col2.setAttribute("class", "col-lg-8");
col2.setAttribute("id", "content")
row.append(col1, col2);

//create headings
let head1 = document.createElement("h1");
head1.setAttribute("id", "title");
head1.innerHTML = "Form Submission";
col1.append(head1);

let head2 = document.createElement("h1");
head2.innerHTML = "Submitted Data";
col2.append(head2);
//discription
let para = document.createElement("p");
para.setAttribute("id", "description");
para.innerHTML = "survey forms";
// create form and form elements
let fm = document.createElement("form");
fm.setAttribute("class", "form");
fm.setAttribute("id", "form");
//head1.append(fm);
//label creation function
col1.append(fm);
let fomdiv = document.createElement("div");
fomdiv.setAttribute("class", "form-group");
fm.appendChild(fomdiv);

let fl = lablfn("label", "for", "first-name", "First Name", "id", "first-label");
let ll = lablfn("label", "for", "last-name", "Last Name", "id", "last-label");
let ad = lablfn("label", "for", "address", "Address", "id", "address-label");
let pl = lablfn("label", "for", "pincode", "Pincode", "id", "pin-label");
let gl = lablfn("label", "for", "gender", "Gender", "id", "gender-label");
let cl = lablfn("label", "for", "chooice", "Chooice of food(Must choose at least 2", "id", "choose-label");
let sl = lablfn("label", "for", "state", "State", "id", "state-label");
let cyl = lablfn("label", "for", "country", "Country", "id", "country-label");
let ml = lablfn("label", "for", "male", "Male", "id", "male-label");
let fel = lablfn("label", "for", "female", "Female", "id", "female-label");
let cho1 = lablfn("label", "for", "ch1", "North Indian", "id", "ni-label");
let cho2 = lablfn("label", "for", "ch2", "South Indian", "id", "si-label");
let cho3 = lablfn("label", "for", "ch3", "Chinese", "id", "chine-label");
let cho4 = lablfn("label", "for", "ch4", "Japanese", "id", "jap-label");
let cho5 = lablfn("label", "for", "ch5", "Italian", "id", "ital-label");

function lablfn(name, attr1, value1, innertext, attr2, value2) {
    let a = document.createElement(name);
    a.setAttribute(attr1, value1);
    a.setAttribute(attr2, value2);
    a.innerHTML = innertext;
    return a;
}

//create input field fn
let f = inpfn("input", "type", "text", "id", "first-name", "class", "first", "enter first name");

let l = inpfn("input", "type", "text", "id", "last-name", "class", "last", "enter last name");
//text area
let a = document.createElement("textarea");
a.setAttribute("id", "address");
a.setAttribute("class", "address");
a.placeholder = "enter address";

let p = inpfn("input", "type", "number", "id", "pincode", "class", "pincode", 'enter pincode');
let s = inpfn("input", "type", "text", "id", "state", "class", "st", "enter state");
let c = inpfn("input", "type", "text", "id", "country", "class", "ctr", "enter country name");
function inpfn(name, attrb1, val1, attrb2, val2, attrb3, val3, val4) {
    let inp = document.createElement(name);
    inp.setAttribute(attrb1, val1);
    inp.setAttribute(attrb2, val2);
    inp.setAttribute(attrb3, val3);
    inp.placeholder = val4;
    inp.required = true;
    return inp;
}
//create radion btn
let radio1 = document.createElement("input");
radio1.setAttribute("type", "radio");
radio1.setAttribute("id", "male");
radio1.setAttribute("name", "gender");
radio1.setAttribute("value", "Male");

let radio2 = document.createElement("input");
radio2.setAttribute("type", "radio");
radio2.setAttribute("id", "female");
radio2.setAttribute("name", "gender");
radio2.setAttribute("value", "Female");

//create check boxes
let ch1 = chebox("input", "type", "checkbox", "id", "ch1", "value", "North Indian");
let ch2 = chebox("input", "type", "checkbox", "id", "ch2", "value", "South Indian");
let ch3 = chebox("input", "type", "checkbox", "id", "ch3", "value", "Chinese");
let ch4 = chebox("input", "type", "checkbox", "id", "ch4", "value", "Japanese");
let ch5 = chebox("input", "type", "checkbox", "id", "ch5", "value", "Italian");

function chebox(name, attr, val, attr1, val1, attr2, val2) {
    let ch = document.createElement(name);
    ch.setAttribute(attr, val);
    ch.setAttribute(attr1, val1);
    ch.setAttribute(attr2, val2);
    return ch;
}
//create breaker fun
let br1 = breaks();
let br2 = breaks();
let br3 = breaks();
let br4 = breaks();
let br5 = breaks();
let br6 = breaks();
let br7 = breaks();
let br8 = breaks();
let br9 = breaks();
let br10 = breaks();
let br11 = breaks();
let br12 = breaks();
let br13 = breaks();
let br14 = breaks();
let br15 = breaks();
let br16 = breaks();
let br17 = breaks();
let br18 = breaks();
let br19 = breaks();
let br20 = breaks();
let br21 = breaks();
function breaks() {
    let b = document.createElement("br");
    return b;
}
//create button
let btn = document.createElement("button");
btn.classList.add("btn", "btn-primary");
btn.setAttribute("id", "submit");
btn.innerHTML = "submit";
btn.value = "submit";
fomdiv.append(fl, br13, f, br15, ll, br14, l, br1, ad, br2, a, br3, pl, br4, p, br5,
    gl, br6, radio1, ml, br7, radio2,
    fel, br16, cl, br17, ch1, cho1, br8, ch2, cho2, br9, ch3,
    cho3, br10, ch4, cho4, br11, ch5, cho5, br12, sl, br18, s, br19, cyl, br20, c, br21, btn, para);

let fnamecheck = document.getElementById("first-name");
fnamecheck.addEventListener("keydown", (e) => {
    if ((e.key === "1") || (e.key === "2") || (e.key === "3") || (e.key === "4") || (e.key === "5")
        || (e.key === "6") || (e.key === "7") || (e.key === "8") || (e.key === "9") || (e.key === "0")
        || (e.key === "/") || (e.key === ".") || (e.key === "=") || (e.key === '-')) {
        e.preventDefault();
    }
})
let lnamecheck = document.getElementById("last-name");
lnamecheck.addEventListener("keydown", (e) => {
    if ((e.key === "1") || (e.key === "2") || (e.key === "3") || (e.key === "4") || (e.key === "5")
        || (e.key === "6") || (e.key === "7") || (e.key === "8") || (e.key === "9") || (e.key === "0")
        || (e.key === "/") || (e.key === ".") || (e.key === "=") || (e.key === '-')) {
        e.preventDefault();
    }
})
let statecheck = document.getElementById("state");
statecheck.addEventListener("keydown", (e) => {
    if ((e.key === "1") || (e.key === "2") || (e.key === "3") || (e.key === "4") || (e.key === "5")
        || (e.key === "6") || (e.key === "7") || (e.key === "8") || (e.key === "9") || (e.key === "0")
        || (e.key === "/") || (e.key === ".") || (e.key === "=")) {
        e.preventDefault();
    }
})
let countrycheck = document.getElementById("country");
countrycheck.addEventListener("keydown", (e) => {
    if ((e.key === "1") || (e.key === "2") || (e.key === "3") || (e.key === "4") || (e.key === "5")
        || (e.key === "6") || (e.key === "7") || (e.key === "8") || (e.key === "9") || (e.key === "0")
        || (e.key === "/") || (e.key === ".") || (e.key === "=")) {
        e.preventDefault();
    }
})
//--------------------------------------------------------------------------------------
//create column 2

//create tabel
let tables = tabcreator("table");
tables.setAttribute("class", "table");
let thead = tabcreator("thead");
let tr = tabcreator("tr");

function tabcreator(name) {
    let ele = document.createElement(name);
    return ele;
}

col2.appendChild(tables);
tables.appendChild(thead);
thead.appendChild(tr);

let th1 = thcreator("S.NO");
let th2 = thcreator("First Name");
let th3 = thcreator("Last Name");
let th4 = thcreator("Address");
let th5 = thcreator("pincodcode");
let th6 = thcreator("Gender");
let th7 = thcreator("Food");
let th8 = thcreator("State");
let th9 = thcreator("Country");
function thcreator(attval) {
    let thele = document.createElement("th");
    thele.innerHTML = attval;
    return thele;
}
tr.append(th1, th2, th3, th4, th5, th6, th7, th8, th9);


//adding data to the table


function details(tagname) {
    let ttags = document.createElement(tagname);
    return ttags;
}
function data(tagname, idname) {
    let datatag = document.createElement(tagname);
    datatag.innerHTML = document.getElementById(idname).value;
    return datatag;
}
function genderchecked() {
    let r1 = document.getElementById("male");
    let r2 = document.getElementById("female");
    if (r1.checked) {
        return r1.value;
    }
    else if (r2.checked) {
        return r2.value;
    }
    else {
        alert("please fill all the fields");
        preventDefault();
    }
}

function foodchecked() {
    let res = [];

    let food1 = document.getElementById("ch1");
    let food2 = document.getElementById("ch2");
    let food3 = document.getElementById("ch3");
    let food4 = document.getElementById("ch4");
    let food5 = document.getElementById("ch5");
    let arr = [food1, food2, food3, food4, food5];
    for (let i = 0; i < 5; i++) {
        if (arr[i].checked) {
            res.push(arr[i].value + "<br>");
        }
    }
    if (res.length < 2) {
        alert("plese select at least 2");
        preventDefault();
    }
    else {
        return res;
    }
}

var sno = 1;

fm.addEventListener("submit", (e) => {
    e.preventDefault();
    let tbo = details("tbody");
    let trow = details("tr");
    let tdata = details("td");
    tdata.innerHTML = sno;
    let tdata1 = data("td", "first-name");
    let tdata2 = data("td", "last-name");
    let tdata3 = data("td", "address");
    let tdata4 = data("td", "pincode");
    let tdata5 = details("td");
    tdata5.innerHTML = genderchecked();
    let tdata6 = details("td");
    tdata6.innerHTML = foodchecked();
    let tdata8 = data("td", "state");
    let tdata9 = data("td", "country");
    tables.append(tbo);
    tbo.append(trow);
    trow.append(tdata, tdata1, tdata2, tdata3, tdata4, tdata5, tdata6, tdata8, tdata9);
    sno += 1;
    fm.reset();
})



