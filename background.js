console.log("potato");
window.addEventListener("click",
    function(e) {
        if (e.shiftKey) {
            chrome.storage.sync.get('curColor', function(item) {
                e.target.setAttribute("fill", item.curColor);
            });
        }
    },
    false);
