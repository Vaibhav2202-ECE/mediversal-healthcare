export default function validate(email, password) {
    if (!email.includes('@')) {
      return 'Invalid email format.';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long.';
    }
    return '';
  }
  