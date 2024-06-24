// contact me
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init('qQOKaNwkia79Hsflp');
    console.log('EmailJS initialized');

    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    const spinner = document.getElementById('loading-spinner');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Show the spinner
        spinner.style.display = 'block';

        const formData = new FormData(form);
        const files = formData.getAll('file');

        console.log('Files:', files);

        const uploadPromises = files.map(file => uploadFile(file));

        Promise.all(uploadPromises)
            .then(fileLinks => {
                console.log('File links:', fileLinks);
                const emailParams = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    project: formData.get('project'),
                    fileLinks: fileLinks.join(', ')
                };

                console.log('Email parameters:', emailParams);

                return emailjs.send("service_jx9j6el","template_8vklqvg", emailParams);
            })
            .then(function (response) {
                console.log('Email sent successfully!', response.status, response.text);
                responseMessage.textContent = 'Your request has been sent successfully!';
                responseMessage.style.color = 'green';
                form.reset();
            })
            .catch(function (error) {
                console.error('Failed to send email...', error);
                responseMessage.textContent = 'Failed to send your request. Please try again.';
                responseMessage.style.color = 'red';
            })
            .finally(() => {
                // Hide the spinner
                spinner.style.display = 'none';
            });
    });

    function uploadFile(file) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const url = 'https://file.io';

            xhr.open('POST', url, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    console.log('File upload response:', response);
                    resolve(response.link);
                } else {
                    console.error('File upload failed:', xhr.statusText);
                    reject(xhr.statusText);
                }
            };

            xhr.onerror = function () {
                console.error('File upload error:', xhr.statusText);
                reject(xhr.statusText);
            };

            const formData = new FormData();
            formData.append('file', file);
            xhr.send(formData);
        });
    }
});
