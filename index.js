document.addEventListener('DOMContentLoaded', function() {
    // Attach a submit event to the form using vanilla JavaScript
    const form = document.getElementById('nameform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission behavior

        // Get the values from the form inputs
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;

        // Function to reverse a string
        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        // Reverse the first and last name
        const reversedFirstName = reverseString(firstName);
        const reversedLastName = reverseString(lastName);

        // Update the jumbotron with the reversed name
        document.querySelector('.jumbotron h1').textContent = `Reversed Name: ${reversedFirstName} ${reversedLastName}`;

        // Show the jumbotron (remove 'd-none' class)
        document.querySelector('.jumbotron').classList.remove('d-none');

        return false;  // Prevent the page from reloading (in some browsers)
    });
});
