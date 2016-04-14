window.addEventListener('load', function () {

    var input    = document.getElementById('task');
    var selector = document.getElementById('priority');
    var btn      = document.getElementById('registration');
    var list     = document.getElementById('taskList');

    btn.addEventListener('click', function (e){
        var item = document.createElement('li');
        var text = input.value + '(優先度:' + selector.value + ')';

        item.innerHTML = text;
        list.appendChild(item);
    });
});
