var Task = {
    create: function create(text, color) {
        var item = document.createElement('li');
        item.innerHTML   = text;
        item.style.color = color;
        return item;
    }
};

var TaskList = {
    add: function add(task) {
        document.getElementById('taskList').appendChild(task);
    }
};

window.addEventListener('load', function () {
    var task1 = Task.create('遊ぶ', '#f62');
    var task2 = Task.create('食べる', '#fc0');
    var task3 = Task.create('寝る', '#0af');

    TaskList.add(task1);
    TaskList.add(task2);
    TaskList.add(task3);
});
