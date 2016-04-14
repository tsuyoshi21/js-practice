window.addEventListener('load', function () {

    var input     = document.getElementById('task');
    var selector  = document.getElementById('priority');
    var registBtn = document.getElementById('registration');
    var taskList  = document.getElementById('taskList');
    var doneList  = document.getElementById('doneList');

    registBtn.addEventListener('click', function (e){
        var item          = document.createElement('li');
        var doneBtn       = document.createElement('button');
        var selectorClone = selector.cloneNode(true);
        var priority      = selector.value;

        item.innerHTML    = input.value;
        item.style.color  = getColor(priority);
        doneBtn.innerHTML = '完了';

        for (var i = 0; i < selectorClone.children.length; i++){
            if ( priority === selectorClone.children[i].value ){
                selectorClone.children[i].selected = true;
            }
        }

        item.appendChild(selectorClone);
        item.appendChild(doneBtn);
        taskList.appendChild(item);

        selectorClone.addEventListener('change', function (event) {
            item.style.color = getColor(event.target.value);
        });

        doneBtn.addEventListener('click', function () {
            taskList.removeChild(item);
            doneList.appendChild(item);
            item.removeChild(selectorClone);
            item.removeChild(doneBtn);
        });
    });

});

function getColor(value) {
    switch ( Number(value) ) {
        case 1: return '#f62';
        case 2: return '#fc0';
        case 3: return '#0af';
    }
}
