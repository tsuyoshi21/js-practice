window.addEventListener('load', function () {

    var dummyText = document.getElementById('dummy');
    var selector  = document.getElementById('priority');

    selector.addEventListener('change', function (event) {
        dummyText.style.color = getColor(event.target.value);
    });
});

function getColor(value) {
    switch ( Number(value) ) {
        case 1: return '#f62';
        case 2: return '#fc0';
        case 3: return '#0af';
    }
}
