const passwordLengthInput = document.getElementById('password-length');
const generatePasswordButton = document.getElementById('generate-password');
const passwordOutputDiv = document.getElementById('password-output');

generatePasswordButton.addEventListener('click', generatePassword);

function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const password = generateSolidPassword(passwordLength);
    passwordOutputDiv.innerText = password;
}

function generateSolidPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?';
    const password = [];

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password.push(characters[randomIndex]);
    }

    return password.join('');
}

// Additional encryption measures:
function hashPassword(password) {
    const salt = generateSalt();
    const hashedPassword = crypto.createHmac('sha256', salt).update(password).digest('hex');
    return hashedPassword;
}

function generateSalt() {
    const salt = crypto.randomBytes(16).toString('hex');
    return salt;
}

// Example usage:
const password = generateSolidPassword(12);
const hashedPassword = hashPassword(password);
console.log(`Generated password: ${password}`);
console.log(`Hashed password: ${hashedPassword}`);