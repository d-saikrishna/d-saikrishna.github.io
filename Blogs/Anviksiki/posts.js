function openPost(postName, lang = 'te') {
    const fileName = lang === 'en' ? `${postName}_eng.md` : `${postName}.md`;
    const postURL = `${postName}/${fileName}`;

    fetch(postURL)
      .then(response => response.text())
      .then(data => {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(data);
        document.getElementById(postName).innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading content:', error);
        document.getElementById(postName).innerHTML = 'Error loading content.';
      });
}

// Load default content (Telugu) on page load
window.onload = function () {
    const blog_id = document.documentElement.id.replace('_html', '');
    openPost(blog_id);
};

// Add this function to switch languages
function switchLanguage(lang) {
    const blog_id = document.documentElement.id.replace('_html', '');
    openPost(blog_id, lang);
}
