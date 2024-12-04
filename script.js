document.addEventListener("DOMContentLoaded", () => {

    // Form Validation
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            // Replace 'inputFieldId' with the actual ID of the input to validate
            const input = document.getElementById("inputFieldId"); 
            if (input) {
                const error = input.nextElementSibling;
                
                // Display error message if input is empty, hide if not
                if (input.value.trim()) {
                    error.style.display = "none";
                } else {
                    error.style.display = "block";
                }
            }
        });
    }
    
    // Image Modal Gallery
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const closeModalBtn = document.getElementById("closeModal");
    const images = document.querySelectorAll(".gallery img");

    if (modal && modalImg && closeModalBtn) {
        // Display the modal when an image is clicked
        images.forEach(image => {
            image.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = image.src;
            });
        });

        // Close the modal when the close button is clicked
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close the modal when clicking outside the image
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    
    // Toggle Project Details
    document.querySelectorAll(".project-toggle").forEach(button => { 
        button.addEventListener("click", () => {
            // Find the associated project details
            const details = button.nextElementSibling;
            
            // Toggle visibility of the project details
            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Clear past error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
  
    let isValid = true;
  
    // Name validation
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      document.getElementById("nameError").textContent = "Name field cannot be left empty.";
      isValid = false;
    }
  
    // Email validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please provide an active email address.";
      isValid = false;
    }
  
    // Message validation
    const message = document.getElementById("message").value;
    if (message.trim() === "") {
      document.getElementById("messageError").textContent = "Message must be required.";
      isValid = false;
    }
  
    // Prevent form submission 
    if (!isValid) {
      event.preventDefault();
    }
  });



    fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
        const factElement = document.createElement("p");
        factElement.textContent = `Cat Fact: ${data.fact}`;
        
        
        document.getElementById("catFact").appendChild(factElement);
    })
    .catch(error => console.error("Error fetching data:", error));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Apply saved theme on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}








    