function ValidCaptcha() {
    var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
    var str2 = removeSpaces(document.getElementById('txtCompare').value);

    if (str1 != str2) {
        alert("Idiot You must be bot");
        return document.getElementById("txtCompare").value = null;
    }

}

function GenerateCaptcha() {
    var chr1 = Math.ceil(Math.random() * 10) + '';
    var chr2 = Math.ceil(Math.random() * 10) + '';
    var chr3 = Math.ceil(Math.random() * 10) + '';

    var str = new Array(4).join().replace(/(.|$)/g, function() { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });
    var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;
    document.getElementById("txtCaptcha").value = captchaCode
}


function removeSpaces(string) {
    return string.split(' ').join('');
}