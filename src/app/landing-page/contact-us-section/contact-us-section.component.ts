import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SalesforceService } from 'src/app/_services/salesforce.service';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.css'],
})
export class ContactUsSectionComponent {
  contactForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private salesforce: SalesforceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      salutation: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      Company: new FormControl(null, Validators.required),
      Type__c: new FormControl(null),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);

    // this.contactForm.value.salutation = null;
    // this.contactForm.value.firstName = null;
    // this.contactForm.value.lastName = null;
    // this.contactForm.value.email = null;
    // this.contactForm.value.phone = null;
    // this.contactForm.value.Company = null;
    // this.contactForm.value.Type__c = null;
    this.salesforce.addLead(FormData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
