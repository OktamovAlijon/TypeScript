"use strict";
// Form validation
Object.defineProperty(exports, "__esModule", { value: true });
// #3. Form validation function
function validateForm(form) {
    const errors = {};
    // email validation
    if (!form.email) {
        errors.email = 'Email is required';
    }
    else if (!form.email.includes('@') || form.email.length < 5) {
        errors.email = 'Email is invalid';
    }
    // password validation
    if (!form.password) {
        errors.password = 'Password is required';
    }
    else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }
    // name validation
    if (!form.name) {
        errors.name = 'Name is required';
    }
    else if (form.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters';
    }
    return errors;
}
// #4 test
const formData = {
    email: 'alijonoktamov96@gmail.com',
    password: '123456',
    name: 'Ali'
};
const errors = validateForm(formData);
console.log(errors);
function isEmailValid(form) {
    return form.email.includes('@');
}
const isValidEmail = isEmailValid(formData);
console.log(isValidEmail);
//# sourceMappingURL=index.js.map