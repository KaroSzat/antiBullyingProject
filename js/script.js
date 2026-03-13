 const form = document.getElementById('emailForm');
    const submitBtn = document.getElementById('submitBtn');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault();

        const titleInput = document.getElementById('title');
        const messageInput = document.getElementById('message');

        if (titleInput.value.trim() !== '' && messageInput.value.trim() !== '') {
            notification.textContent = 'Thank you for sending us a message!';
            notification.style.display = 'block';

            
            titleInput.value = '';
            messageInput.value = '';

            
            setTimeout(function() {
                notification.textContent = '';
                notification.style.display = 'none';
            }, 3000);
        } else {
            notification.textContent = 'Please fill in both the Title and Message fields.';
            notification.style.display = 'block';
        }
    });