document.getElementById('imageLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "shen.html";
});

document.getElementById('imageLinkk').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "ret.html";
});


document.getElementById('imageLinkki').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "re.html";
});



document.getElementById('imageLinkkii').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "arsi.html";
});


document.getElementById('imageLinkkiin').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = "vist.html";
});

(function () {
    const devtools = /./;
    devtools.toString = function () {
        return 'devtools';
    };
    console.log('%c', devtools);
    setInterval(function () {
        if (devtools.toString() === 'devtools') {
            alert('Инструменты разработчика заблокированы!');
            window.location.reload();
        }
    }, 1000);
})();
