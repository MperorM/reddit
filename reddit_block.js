url = document.URL;
url = location.href;
var subreddit = /https:\/\/www.reddit.com\/r\/[^\/]*\/(.+)+/;
matches = url.match(subreddit);

if (matches == null) {
    var all = document.getElementsByTagName("*");
    for (let i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
};
