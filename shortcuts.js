function shortcuts(e) {
    var evt = window.event? event : e
    if (evt.ctrlKey) {
        if (evt.keyCode == 83) { // s
            download_js();
        }
        else if (evt.keyCode == 89) { // y
            redo();
        }
        else if (evt.keyCode == 90) { // z
            undo();
        }
    }
}

document.onkeydown = shortcuts;
