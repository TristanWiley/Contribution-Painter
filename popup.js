function click(e) {
    var el = document.getElementById('colorCode');
    chrome.storage.sync.set({ 'curColor': e.target.getAttribute('data-id') }, function() {
        console.log('Color changed');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
