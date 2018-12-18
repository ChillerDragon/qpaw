function shortcuts(e) {
  const evt = window.event ? event : e;
  if (evt.ctrlKey || evt.metaKey) {
    if (evt.keyCode === 83) { // s
      e.preventDefault();
      download_js();
    } else if (evt.keyCode === 89) { // y
      redo();
    } else if (evt.keyCode === 90) { // z
      undo();
    }
  }
}

document.onkeydown = shortcuts;
