import { Component } from '@angular/core';
import { SelectOption } from '@webblocksapp/ng-bs4-form-components';
import { BaseModel, SubmitEvent } from '@webblocksapp/ng-data-groups';
import { RegistrationFormDto } from './registration-form.dto';

@Component({
  selector: 'registration-form',
  template: `
    <h1>Registration form</h1>
    <data-groups
      [model]="registrationForm"
      [highlightOnValid]="true"
      (submitEvent)="onSubmit($event)"
    >
      <data-group>
        <bs-input
          #dataInput
          label="Email"
          name="email"
          placeholder="example@email.com"
        ></bs-input>
        <bs-select
          #dataInput
          label="Country"
          name="country"
          placeholder="Select a country"
          [options]="countries"
        ></bs-select>
        <bs-checks
          #dataInput
          label="Favorite foods"
          name="favoriteFoods"
          [options]="favoriteFoods"
        ></bs-checks>
        <bs-radios
          #dataInput
          label="Gender"
          name="gender"
          [options]="genders"
        ></bs-radios>
        <bs-datepicker
          #dataInput
          label="Birth Date"
          name="birthDate"
        ></bs-datepicker>
      </data-group>
      <button type="submit" class="btn btn-primary">Send</button>
    </data-groups>
  `,
})
export class RegistrationFormComponent {
  public registrationForm: BaseModel = new BaseModel(RegistrationFormDto);
  public countries: SelectOption[] = [
    { value: 1, viewValue: 'Colombia' },
    { value: 2, viewValue: 'Perú' },
    { value: 3, viewValue: 'Ecuador' },
  ];

  public favoriteFoods: SelectOption[] = [
    { value: 1, viewValue: 'Tacos' },
    { value: 2, viewValue: 'Ice Cream' },
    { value: 3, viewValue: 'Spaghetti' },
    { value: 4, viewValue: 'Pizza' },
  ];

  public genders: SelectOption[] = [
    { value: 1, viewValue: 'Male' },
    { value: 2, viewValue: 'Female' },
    { value: 3, viewValue: 'Other' },
  ];

  public onSubmit(event: SubmitEvent): void {
    event.then((validationResult) => {
      const { isValid, validatedData } = validationResult;
      if (isValid) {
        alert(JSON.stringify(validatedData));
      }
    });
  }
}
