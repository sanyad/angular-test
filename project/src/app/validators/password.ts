import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;
    if (password.length < 8) {
      return { 'minLength': true };
    }
    if (!/[0-9]/.test(password) || !/[a-zA-Z]/.test(password)) {
      return { 'patternMismatch': true };
    }
    return null;
  };
}
