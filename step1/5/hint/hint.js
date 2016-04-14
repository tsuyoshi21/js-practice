window.addEventListener('load', function () {

    var input    = document.getElementById('task');
    var selector = document.getElementById('priority');
    var btn      = document.getElementById('registration');
    var list     = document.getElementById('taskList');

    btn.addEventListener('click', function (e){
        var item          = document.createElement('li');
        var selectorClone = selector.cloneNode(true);
        var priority      = selector.value;

        for (var i = 0; i < selectorClone.children.length; i++){
            if ( priority === selectorClone.children[i].value ){
                selectorClone.children[i].selected = true;
            }
        }

        item.innerHTML = input.value;
        item.appendChild(selectorClone);
        list.appendChild(item);
    });
});
