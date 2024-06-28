document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        }).then(response => {
            if (response.ok) {
                alert("Thank you for contacting me!");
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form");
        });
    });
});
