window.addEventListener("load", init);
var input1d, input2d;

function init() {
    console.log('in init..');
    // document.querySelector("#changepdftoxls").addEventListener("click", RotateLoader);
    // document.querySelector("#downloadxls").addEventListener("click", DownloadXLS);
    // input1d = document.querySelector("#ipupdf");
    // input2d = document.querySelector("#ipupdfname");
}
var isRotate = false;

function RotateLoader() {
    console.log('Rotating');
    GetFormData();
    if (isRotate) {
        document.querySelector("#load").style.display = 'block';
        DoChangePDFtoXLS();
        isRotate = !isRotate;
    } else {
        document.querySelector("#load").style.display = 'none';
        isRotate = !isRotate;
    }
    console.log('Change PDF to XLS...');
}

function GetFormData() {
    var formsdata = document.getElementById('uploadform').elements;
    var obj = {};
    if (formsdata.length > 0) {
        for (var i = 0; i < formsdata.length; i++) {
            var item = formsdata.item(i);
            obj[item.name] = [item.value,item.id];
        }
    }
    console.log('Form data in obj  = ',obj);
    var form = false;
var length = document.forms.length;
console.log('All Forms  = ',document.forms);
console.log('Total number of Forms = ',length);
for(var i = 0; i < length; i++) {
    if(form.id == "downloadform") {
        form = document.forms[i];
    }
}
console.log('Wanted Form Data  = ',form);
}

function DoChangePDFtoXLS() {
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    var path = document.location.pathname;
    var directory = path.substring(path.indexOf('/'), path.lastIndexOf('/'));
    console.log('loc = ', loc, 'dir = ', dir);
    console.log('path = ', path, 'direc = ', directory);

    console.log('In change...', input1d.value, input1d.innerHTML, input2d.value, input2d.innerHTML);

}

function DownloadXLS() {
    console.log('Download XLS....');
}