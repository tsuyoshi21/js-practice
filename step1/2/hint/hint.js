window.addEventListener('load', function () {

    var item = document.createElement('li');
    var btn  = document.createElement('button');
    var list = document.getElementById('taskList');

    item.innerHTML = '遊ぶ';
    btn.innerHTML  = '完了';

    item.appendChild(btn);
    list.appendChild(item);

    btn.addEventListener('click', function () {
        list.removeChild(item);
    });
});
