document.getElementById('next-2').onclick = function(){
    let lists = document.querySelectorAll('.item2');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev-2').onclick = function(){
    let lists = document.querySelectorAll('.item2');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}