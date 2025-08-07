document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Reset errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Name
    const name = document.getElementById("name").value.trim();
    if (!/^[a-zA-Z\s]{3,}$/.test(name)) {
        document.getElementById("nameError").textContent = "Enter at least 3 letters.";
        isValid = false;
    }

    // Email
    const email = document.getElementById("email").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email address.";
        isValid = false;
    }

    // Phone
    const phone = document.getElementById("phone").value.trim();
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Age
    const age = parseInt(document.getElementById("age").value.trim());
    if (isNaN(age) || age < 18) {
        document.getElementById("ageError").textContent = "Age must be 18 or older.";
        isValid = false;
    }

    // Gender
    const genderChecked = document.querySelector("input[name='gender']:checked");
    if (!genderChecked) {
        document.getElementById("genderError").textContent = "Select a gender.";
        isValid = false;
    }

    // Event Type
    const eventType = document.getElementById("eventType").value;
    if (eventType === "") {
        document.getElementById("eventTypeError").textContent = "Select an event type.";
        isValid = false;
    }

    // Final check
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});