// Select all apply buttons
const applyButtons = document.querySelectorAll('.apply-btn');

applyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.nextElementSibling; // The form right after button
        form.style.display = 'block';
        button.style.display = 'none'; // hide apply button when form is open
    });
});

// Select all cancel buttons
const cancelButtons = document.querySelectorAll('.close-form');

cancelButtons.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest('.application-form');
        const applyBtn = form.previousElementSibling;
        form.style.display = 'none';
        applyBtn.style.display = 'inline-block';
    });
});

// Optional: handle form submission
const forms = document.querySelectorAll('.application-form form');
forms.forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Application submitted! Thank you.");
        form.reset();
        form.parentElement.style.display = 'none';
        const applyBtn = form.parentElement.previousElementSibling;
        applyBtn.style.display = 'inline-block';
    });
});