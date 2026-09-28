export default function generatePass(passwordLength: number = 10, mixCase: boolean = true) {
    let password: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?'

    for (let index = 0; index < passwordLength; index++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    if (!mixCase) {
        return password.toLowerCase();
    }

    if (passwordLength >= 2) {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        if (!/[A-Z]/.test(password)) {
            password = upper.charAt(Math.floor(Math.random() * upper.length)) + password.slice(1);
        }
        if (!/[a-z]/.test(password)) {
            password = password.slice(0, -1) + lower.charAt(Math.floor(Math.random() * lower.length));
        }
    }

    return password;
}