const loginFormHandler = async (event) => {
    event.preventDefault();
      
  
      // Collect values from the login form
      const name = document.querySelector("#name").value.trim();
      const password = document.querySelector("#password").value.trim();
      console.log(name, password);
      if (name && password) {
          // Send a POST request to the API endpoint
          const response = await fetch("/api/login", {
              method: "POST",
              body: JSON.stringify({ name, password }),
              headers: { "Content-Type": "application/json" },
          });
  
          if (response.ok) {
              // If successful, redirect the browser to the profile page
              document.location.replace("/profile");
          } else {
              alert(response.statusText);
          }
      } 
    console.log("test");
  };
  
  
  window.onload =function () {
   document
      .querySelector('.login-form')
      .addEventListener('submit', loginFormHandler);
   
  };