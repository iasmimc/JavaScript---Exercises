let str = `w3resource`;

setInterval(function () {
    str = str[str.length - 1] + str.slice(0, str.length - 1);
    console.log(str);
}, 1000);