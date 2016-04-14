window.addEventListener('load', function () {

    var input     = document.getElementById('task');
    var registBtn = document.getElementById('registration');
    var taskList  = document.getElementById('taskList');
    var doneList  = document.getElementById('doneList');

    registBtn.addEventListener('click', function (e){
        var item    = document.createElement('li');
        var doneBtn = document.createElement('button');

        item.innerHTML    = input.value;
        doneBtn.innerHTML = '完了';

        item.appendChild(doneBtn);
        taskList.appendChild(item);

        doneBtn.addEventListener('click', function () {
            taskList.removeChild(item);
            doneList.appendChild(item);
            item.removeChild(doneBtn);
        });
    });

});
