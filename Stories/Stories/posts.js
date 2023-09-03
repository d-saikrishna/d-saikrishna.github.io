function openPost(postName) {
    var postURL = postName+'/'+postName + '.md';

    fetch(postURL).then(response => response.text())
    .then(data => {console.log(data);
                converter = new showdown.Converter();
            var md = data;
            var html = converter.makeHtml(md);
            document.getElementById(postName).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading external HTML content:', error);
            contentContainer.innerHTML = 'Error loading content.';
        });

    }

// Load the content of the first tab by default when the page loads
window.onload = function () {
    const htmlElement = document.documentElement;
    var blog_id = htmlElement.id;
    var blog_id = blog_id.slice(0, -5);
    openPost(blog_id);
};