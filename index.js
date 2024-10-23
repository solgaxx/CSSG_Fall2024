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
        //Determines the legnth of the reversed name
        const reversedNameLength = reversedFirstName.length + reversedLastName.length;
       //Change text color based on Length
        const jumbotronText = document.querySelector('.jumbotron h1');
        if (reversedNameLength > 10){
            jumbotronText.style.color = 'red';
        } else {
            jumbotronText.style.color = 'green';
        }

        // Update the jumbotron with the reversed name
        document.querySelector('.jumbotron h1').textContent = `Reversed Name: ${reversedFirstName} ${reversedLastName}`;

        // Show the jumbotron (remove 'd-none' class)
        document.querySelector('.jumbotron').classList.remove('d-none');

        return false;  // Prevent the page from reloading (in some browsers)
    });
});
