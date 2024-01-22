function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let validChars = lowercaseChars;

    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    document.getElementById('generatedPassword').innerText = `Generated Password: ${password}`;
}

function updateDateTime() {
    const currentDate = new Date();
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.innerText = currentDate.toLocaleDateString('en-US', options);
    timeElement.innerText = currentDate.toLocaleTimeString();
}

// Initial update
updateDateTime();

// Update date and time every second
setInterval(updateDateTime, 1000);
