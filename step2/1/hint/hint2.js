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

window.addEventListener('load', function () {
    var task = Task.create('遊ぶ');
    TaskList.add(task);
});
