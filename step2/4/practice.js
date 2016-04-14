var TaskRegister = {
    init: function init() {
        var btn; // 登録ボタン
        btn.addEventListener('click', function (){});
    }
};

var Task = {
    create: function create(text, color) {}
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
        var btn; // 完了ボタン
        btn.addEventListener('click', function () {});
    }
};

var TaskList = {
    add: function add(task) {},

    remove: function remove(task) {}
};

var DoneList = {
    add: function add(task) {}
};

window.addEventListener('load', TaskRegister.init);
