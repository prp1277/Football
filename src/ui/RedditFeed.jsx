const RedditFeed = new XMLHttpRequest();
/**
 * onReadyStateChange specifies the function to
 */
RedditFeed.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // What to do when document is ready
    document.getElementById("root").innerHTML = RedditFeed.responseText;
  }
};

RedditFeed.open("GET", "https://reddit.com/.json", true);
RedditFeed.send();

export default RedditFeed;
