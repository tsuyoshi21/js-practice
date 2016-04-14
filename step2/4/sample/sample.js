var TaskRegister = {
    init: function init() {
        var input    = document.getElementById('task');
        var selector = document.getElementById('priority');
        var btn      = document.getElementById('registration');

        btn.addEventListener('click', function (){
            var color = Priority.getColor(selector.value);
            var task  = Task.create(input.value, color);
            TaskList.add(task);
        });
    }
};

var Task = {
    create: function create(text, color) {
        var item = document.createElement('li');
        var btn  = Button.create(item);

        item.innerHTML   = text;
        item.style.color = color;
        item.appendChild(btn);
        return item;
    }
};

var Priority = {
    getColor: function getColor(value) {
        switch ( Number(value) ) {
            case 1: return '#f62';
            case 2: return '#fc0';
            case 3: return '#0af';
        }
    }
};

var Button = {
    create: function create(task) {
        var btn = document.createElement('button');
        btn.innerHTML = '完了';

        btn.addEventListener('click', function () {
            TaskList.remove(task);
            DoneList.add(task);
            task.removeChild(btn);
        });
        return btn;
    }
};

var TaskList = {
    add: function add(task) {
        document.getElementById('taskList').appendChild(task);
    },

    remove: function remove(task) {
        document.getElementById('taskList').removeChild(task);
    }
};

var DoneList = {
    add: function add(task) {
        document.getElementById('doneList').appendChild(task);
    }
};

window.addEventListener('load', TaskRegister.init);
