import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function passwordValidator  (control: AbstractControl):{ noMatch: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('repeatPassword');

  if (password?.value !== confirmPassword?.value) {
    return {noMatch: true}
  }
  return null;
}