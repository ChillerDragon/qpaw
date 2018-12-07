// TODO: get rid of one of these download methods
// only use one for both tasks

// credits of the download func go to Humberto Molina Lopez:
// https://stackoverflow.com/a/42546234/6287070
function download() {
  console.log('download called');
  const downloadDom = document.getElementById('download');
  const image = document.getElementById('draw-canvas')
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream');
  downloadDom.setAttribute('href', image);
  //download.setAttribute('download', 'archive.png');
}

// credits of this download func go to Ulf Aslak
// https://stackoverflow.com/a/50300880
function download_js() {
  const link = document.createElement('a');
  link.download = 'qpaw_output.png';
  link.href = document.getElementById('draw-canvas').toDataURL();
  link.click();
}
