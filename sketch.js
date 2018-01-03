(function() {
    console.log("bookmarklet starting");
    let paragraphs = document.getElementsByTagName('span');
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerHTML = 'nakpin';
    }
  })();