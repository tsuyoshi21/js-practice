window.addEventListener('load', function () {

    var item1 = document.createElement('li');
    var item2 = document.createElement('li');
    var item3 = document.createElement('li');
    var list  = document.getElementById('taskList');

    item1.innerHTML = '遊ぶ';
    item2.innerHTML = '食べる';
    item3.innerHTML = '寝る';

    item1.style.color = '#f62';
    item2.style.color = '#fc0';
    item3.style.color = '#0af';

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
});
