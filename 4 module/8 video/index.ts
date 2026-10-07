// Form validation

// #1.Data type
type FormDataType = {
  email: string;
  password: string;
  name: string;
};

// #2. Error type
type FormErrorType = {
  email?: string;
  password?: string;
  name?: string;
};

// #3. Form validation function
function validateForm<T extends FormDataType>(form: T): FormErrorType {
  const errors: FormErrorType = {};

  // email validation
  if (!form.email) {
    errors.email = 'Email is required';
  } else if (!form.email.includes('@') || form.email.length < 5) {
    errors.email = 'Email is invalid';
  }

  // password validation
  if (!form.password) {
    errors.password = 'Password is required';
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }

  // name validation
  if (!form.name) {
    errors.name = 'Name is required';
  } else if (form.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  return errors;
}

// #4 test

const formData: FormDataType = {
    email: 'alijonoktamov96@gmail.com',
    password: '123456',
    name: 'Ali'
};

const errors = validateForm(formData);
console.log(errors); 

// #5

type IsEmailValid<T extends { email: string }> = T extends { email: string } ? boolean : never;

function isEmailValid<T extends { email: string }>(form: T): IsEmailValid<T> {
    return form.email.includes('@') as IsEmailValid<T>;
}

const isValidEmail = isEmailValid(formData);
console.log(isValidEmail); 

