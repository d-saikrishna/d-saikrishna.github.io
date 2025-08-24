function openTab(tabName) {
    // Hide all contents
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");

    // Show the selected tab
    const tabElement = document.getElementById(tabName + "-content");
    if (tabElement) {
        tabElement.style.display = "block";
        loadTabContent(tabName); // ✅ make sure content loads
    }

    // Update URL hash
    window.location.hash = tabName;
}

// On page load, check if URL has a hash
window.addEventListener("load", () => {
    let tab = window.location.hash.substring(1); // remove '#'
    if (!tab) tab = "research"; // default tab
    openTab(tab);
});

function loadTabContent(tabName) {
    // Define the URL of the HTML file for the corresponding tab
    let tabURL = tabName + '-content.html';

    // Fetch the content from the HTML file
    fetch(tabURL)
        .then(response => response.text())
        .then(content => {
            // Clear the content of all tab content containers
            const tabContentContainers = document.querySelectorAll('.tab-content');
            tabContentContainers.forEach(container => {
                container.innerHTML = '';
            });
            // Inject the fetched content into the tab content container
            document.getElementById(tabName + '-content').innerHTML = content;
        })
        .catch(error => console.error('Error loading tab content:', error));
}

// Load the content of the first tab by default when the page loads
window.onload = function () {
    loadTabContent('research');
};

// function togglePost(dir,postName) {
//     var postURL = dir+'/'+ postName+'/'+postName + '.md';

//     fetch(postURL).then(response => response.text())
//     .then(data => {console.log(data);
//                 converter = new showdown.Converter();
//             var md = data;
//             var html = converter.makeHtml(md);
//             document.getElementById(postName).innerHTML = html;
//         })
    
    

    // Following code is useful to source html instead of md file
    // // Define the URL of the HTML file for the corresponding post
    // let postURL =dir+'/'+ postName + '.html';

    // // Fetch the content from the HTML file
    // fetch(postURL)
    //     .then(response => response.text())
    //     .then(content => {
    //         // Clear the content of all post content containers
    //         const postContentContainers = document.querySelectorAll('.post');
    //         postContentContainers.forEach(container => {
    //             container.innerHTML = '';
    //         });
    //         // Inject the fetched content into the tab content container
    //         document.getElementById(postName).innerHTML = content;
    //     })
    //     .catch(error => console.error('Error loading post content:', error));
// }