var Task = {
    create: function create(text) {
        var item = document.createElement('li');
        var btn  = Button.create(item);
        item.innerHTML = text;
        item.appendChild(btn);
        return item;
    }
};

var Button = {
    create: function create(task) {
        var btn = document.createElement('button');
        btn.innerHTML = '完了';

        btn.addEventListener('click', function () {
            TaskList.remove(task);
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

window.addEventListener('load', function () {
    var task = Task.create('遊ぶ');
    TaskList.add(task);
});
