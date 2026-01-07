function openPost(postName, lang = 'en') {
    const fileName = lang === 'en' ? `${postName}.md` : `${postName}_tel.md`;
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

// function openPost(postName) {
//     var postURL = postName+'/'+postName + '.md';

//     fetch(postURL).then(response => response.text())
//     .then(data => {console.log(data);
//                 converter = new showdown.Converter();
//             var md = data;
//             var html = converter.makeHtml(md);
//             document.getElementById(postName).innerHTML = html;
//         })
//         .catch(error => {
//             console.error('Error loading external HTML content:', error);
//             contentContainer.innerHTML = 'Error loading content.';
//         });

//     }

// // Load the content of the first tab by default when the page loads
// window.onload = function () {
//     const htmlElement = document.documentElement;
//     var blog_id = htmlElement.id;
//     var blog_id = blog_id.slice(0, -5);
//     openPost(blog_id);
// };