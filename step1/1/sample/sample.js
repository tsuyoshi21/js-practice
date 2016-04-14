window.addEventListener('load', function () {

    var input = document.getElementById('task');
    var btn   = document.getElementById('registration');
    var list  = document.getElementById('taskList');

    btn.addEventListener('click', function (e){
        var item = document.createElement('li');
        item.innerHTML = input.value;
        list.appendChild(item);
    });

});
