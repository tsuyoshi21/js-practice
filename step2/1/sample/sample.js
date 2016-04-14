var TaskRegister = {
    init: function init() {
        var input = document.getElementById('task');
        var btn   = document.getElementById('registration');

        btn.addEventListener('click', function (){
            var task = Task.create(input.value);
            TaskList.add(task);
        });
    }
};

var Task = {
    create: function create(text) {
        var item = document.createElement('li');
        item.innerHTML = text;
        return item;
    }
};

var TaskList = {
    add: function add(task) {
        document.getElementById('taskList').appendChild(task);
    }
};

window.addEventListener('load', TaskRegister.init);
