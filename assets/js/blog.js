class Blog {
    /**
     *
     * @param {string} username
     * @param {string} fullName
     */
    constructor(username, fullName) {
      this.username = username;
      this.fullName = fullName;
      this.posts = [];
    }
  
    /**
     * 
     * @param {string} title - The title of the blog post
     * @param {string} content - The content of the blog post
     */
    createPost(title, content){
      const newPost = new BlogPost(title, content, this.username);
      this.posts.push(newPost);
      console.log(`Post titled "${title}" created by ${this.username}`)
    }
  
    editPost(){
      const title=document.getElementById('post.title');
      title.innerText='Updated Blog Post Title';
      const content =document.getElementById('post.content');
      content.innerText='Updated Blog Post Content';
      const username=document.getElementById('post.username');
      username.innerText='Updated Blog Post Username';
  
    }
  
    deletePost(){
  const confirmation = confirm("Are you sure you want to delete this post?");
  if (confirmation){
    document.getElementById('post.title').remove();
    document.getElementById('post.content').remove();
    document.getElementById('post.username').remove();
    alert("The post has been deleted.");
  }
    }
  
    displayPost(){
  const postContainer=
  document.getElementById('post.container')
    }
  }


  /**
   * @class For the blog post
   */
  class BlogPost{
      /**
       * @param {string} title 
       * @param {string} content 
       * @param {string} author 
       */
      constructor(title, content, author){
          this.title = title;
          this.content = content;
          this.author = author;
          this.createdAt = new Date();
      }
  }
  
  // Create users
/**
   * 
   * @param {string} title - The title of the blog post
   * @param {string} content - The content of the blog post
   * @param {string} author - The author of the blog post
   */
  // Users will create posts
  createPost(title, content,author);{
    const newPost = new BlogPost(title, content, this.author);
    this.posts.push(newPost);
    console.log(`Post titled "${title}" created by ${this.author}`);
  }
  // Display posts
  
  displayPost();{
    const postContainer=
    document.getElementById('post.container')
      }
  // Edit posts
  
  editPost();{
    const title=document.getElementById('post.title');
    title.innerText='Updated Blog Post Title';
    const content =document.getElementById('post.content');
    content.innerText='Updated Blog Post Content';
    const username=document.getElementById('post.author');
    author.innerText='Updated Blog Post Author';
  }
  // Delete post
  deletePost();{
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (confirmation){
      document.getElementById('post.title').remove();
      document.getElementById('post.content').remove();
      document.getElementById('post.author').remove();
      alert("The post has been deleted.");
    }
      }
