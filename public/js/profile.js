// Event listener for creating a new blog post
document.querySelector('.new-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch('../api/blogs', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create blog post');
      }
    }
  });
  
  // Event listener for updating a blog post
  document.querySelectorAll('.update-post-form').forEach((form) => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const id = form.getAttribute('data-id');
      const title = form.querySelector('input[name="title"]').value.trim();
      const content = form.querySelector('textarea[name="content"]').value.trim();
  
      if (title && content) {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to update blog post');
        }
      }
    });
  });
  
// Event listener for deleting a blog post
document.querySelectorAll('.delete-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      const id = button.getAttribute('data-id');
      const response = await fetch(`/api/posts/${id}`, {  
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete blog post');
      }
    });
  });
  