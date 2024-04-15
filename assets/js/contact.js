document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('contactModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeModalBtn = document.querySelector('.close');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Here you can add code to handle form submission, like sending data to a server
        alert('Form submitted!');
        modal.style.display = 'none'; // Close modal after form submission
    });
});
