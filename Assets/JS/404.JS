// var str = document.getElementsByTagName('div')[0].innerHTML.toString();
// var i = 0;
// document.getElementsByTagName('div')[0].innerHTML = "";

// setTimeout(function() {
//     var se = setInterval(function() {
//         i++;
//         document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
//         if (i == str.length) {
//             clearInterval(se);
//             document.getElementsByTagName('div')[0].innerHTML = str;
//         }
//     }, 10);
// },0);



// setTimeout(function() {
//     document.getElementById('btn').style.display = 'block';
// }, 20);

var str = document.getElementsByTagName('div')[0].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName('div')[0].innerHTML = "";

    var se = setInterval(function() {
        i++;
        document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            document.getElementsByTagName('div')[0].innerHTML = str;
            document.getElementById('btn').style.display = 'block'; /* Show the button after animation completes */
        }
    }, 10);