var posts=["2025/02/03/hello-world/","2025/02/04/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };