import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent  implements OnInit {

  @Input('profile') profile: any;
  editForm: FormGroup
  constructor(private fb: FormBuilder) 
  { 
    this.editForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      idnumber: ['', [Validators.required, Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.pattern]]
    })
  }

  ngOnInit() {
    console.log('profile', this.profile.firstname)
  }

  save = () => {
    console.log(this.editForm)
  }
}
