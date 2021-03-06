window.addEventListener('load', function () {

    var input     = document.getElementById('task');
    var registBtn = document.getElementById('registration');
    var list      = document.getElementById('taskList');

    registBtn.addEventListener('click', function (e){
        var item    = document.createElement('li');
        var doneBtn = document.createElement('button');

        item.innerHTML    = input.value;
        doneBtn.innerHTML = '完了';

        item.appendChild(doneBtn);
        list.appendChild(item);

        doneBtn.addEventListener('click', function () {
            list.removeChild(item);
        });
    });

});
