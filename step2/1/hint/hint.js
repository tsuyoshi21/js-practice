var TaskRegister = {
    init: function init() {
        var input = document.getElementById('task');
        var btn   = document.getElementById('registration');

        btn.addEventListener('click', function (){
            alert(input.value);
        });
    }
};

window.addEventListener('load', TaskRegister.init);
