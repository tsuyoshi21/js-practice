window.addEventListener('load', function () {

    var input = document.getElementById('task');
    var btn   = document.getElementById('registration');

    btn.addEventListener('click', function (){
        alert(input.value);
    });

});
