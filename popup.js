function click(e) {
    var el = document.getElementById('colorCode');
    chrome.storage.sync.set({ 'curColor': e.target.getAttribute('data-id') }, function() {
        changeColor(e.target.getAttribute('data-id'));
    });
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
    chrome.storage.sync.get('curColor', function(item) {
        var colorInput = document.getElementById('colorInput');
        colorInput.value = item.curColor;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('colorInput').addEventListener('input', function() {
        changeColor(colorInput.value);
    });
    
    chrome.storage.sync.get('curColor', function(item) {
        var colorInput = document.getElementById('colorInput');
        colorInput.value = item.curColor;
    });

    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});

function changeColor(color) {
    chrome.storage.sync.set({ 'curColor': color }, function() {
        console.log('Color changed');
    });
}
