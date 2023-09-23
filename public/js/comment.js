const newCommentHandler = async (event) => {
    event.preventDefault();
  
    
    const comment = document.querySelector('#comment').value.trim();
    const blog_id = document.querySelector('#blog_id').value;
    if (comment) {
      console.log(document.querySelector('#blog_id'));
console.log(document.querySelector('#blog_id').value);

      const response = await fetch(`/api/comment`, {
        
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace(`/blog/${blog_id}`);
      } else {
        alert('Failed to create blog post');
      }
    }
  };

 window.onload = function() {
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
};