// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener("DOMContentLoaded", function() {
    const jobTitles = ["Software Developer", "Front End Developer", "Freelancer"];
    let currentIndex = 0;

    function animateJobTitle() {
        document.getElementById("job-title").innerText = jobTitles[currentIndex];
        currentIndex = (currentIndex + 1) % jobTitles.length;
    }

    animateJobTitle(); // Initial animation

    setInterval(animateJobTitle, 3000); // Change job title every 3 seconds
});
// Add this JavaScript code to your script.js file

document.addEventListener("DOMContentLoaded", function() {
    // Get all the "View More" buttons
    let viewMoreButtons = document.querySelectorAll('.view-more-btn');

    // Loop through each button
    viewMoreButtons.forEach(button => {
        // Add click event listener to each button
        button.addEventListener('click', function() {
            // Get the corresponding additional content based on the data-project-id attribute
            let projectId = this.getAttribute('data-project-id');
            let additionalContent = document.getElementById(projectId + '-content');

            // Toggle the display of the additional content
            if (additionalContent.style.display === 'none') {
                additionalContent.style.display = 'block';
                this.textContent = 'View Less'; // Change button text to "View Less"
            } else {
                additionalContent.style.display = 'none';
                this.textContent = 'View More'; // Change button text back to "View More"
            }
        });
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
