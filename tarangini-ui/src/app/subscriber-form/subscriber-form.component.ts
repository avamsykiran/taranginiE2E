import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriberService } from '../service/subscriber.service';

@Component({
  selector: 'app-subscriber-form',
  templateUrl: './subscriber-form.component.html',
  styleUrls: ['./subscriber-form.component.css']
})
export class SubscriberFormComponent implements OnInit {

  subscriberForm: FormGroup;
  isEditing: boolean;

  errMsg!: string|null;

  constructor(
    private subscriberService: SubscriberService,
    private router: Router) {

    let today = new Date().toISOString().substring(0, 10);

    this.subscriberForm = new FormGroup({
      subscriberId: new FormControl('0', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      dateOfRegistration: new FormControl(today, [Validators.required, this.dateValidator]),
      mobileNumber: new FormControl('', [Validators.required,
      Validators.pattern(/[1-9][0-9]{9}/)])
    });

    this.isEditing = false;
  }

  ngOnInit() {
    if (this.subscriberService.currentSubscriber) {
      this.isEditing = true;
      this.subscriberForm.setValue(this.subscriberService.currentSubscriber);
    }
  }

  dateValidator(control: FormControl): ValidationErrors | null {
    let inputDate = new Date(control.value);
    let today = new Date();
    let err = null;
    if (inputDate > today) {
      err = { dateOfRegistration: true };
    }
    return err;
  }

  control(controlName: string) {
    return this.subscriberForm.controls[controlName];
  }

  onSubmit() {
    this.errMsg = null;

    if (this.isEditing) {
      this.subscriberService.modifySubscriber(this.subscriberForm.value)
        .subscribe({
          next: (data) => {
            this.subscriberService.currentSubscriber = data;
            this.router.navigate(['/dashboard'], { queryParams: { msg: "Profile Updated Successfully" } });
          },
          error: (err) => {
            this.errMsg = err.error;
          }
        }
        );
    } else {
      this.subscriberService.createSubscriber(this.subscriberForm.value)
        .subscribe({
          next: (data) => {
            this.router.navigate(['/'], { queryParams: { msg: "Registration Successful with Registration Id: " + data.subscriberId } });
          },
          error: (err) => {
            this.errMsg = err.error;
          }
        }
        );
    }
  }
}

