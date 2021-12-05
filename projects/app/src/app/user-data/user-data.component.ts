import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RandomDataType } from '../random_data/random_data_type';
import { MemeApiService } from '../meme-api.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  face_data: RandomDataType[] = [];
  user_form_data: RandomDataType = {
    address: '',
    cell: '',
    email: '',
    gender: '',
    name: '',
    picture: '',
    age: '',
  };
  single_user_data: RandomDataType;
  single_user_click_flag: boolean = false;
  create_mode: boolean = false;
  user_information;
  constructor(
    private router: Router,
    private meme_service: MemeApiService,
    private formBuilder: FormBuilder
  ) {
    this.creating_the_form();
    for (let i: number = 1; i < 5; i++) {
      this.meme_service.random_face_data().subscribe(
        (data: any) => {
          console.log(data);
          this.face_data.push({
            cell: data.results[0].cell,
            email: data.results[0].email,
            gender: data.results[0].gender,
            name: `${data.results[0].name.title} ${data.results[0].name.first}  ${data.results[0].name.last}`,
            picture: data.results[0].picture.large,
            age: data.results[0].dob.age,
            address: `${data.results[0].location.city} ${data.results[0].location.country} ${data.results[0].location.postcode} ${data.results[0].location.state}`,
          });
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('completed');
        }
      );
    }
    console.log(this.face_data);
  }
  ngOnInit(): void {}
  entering_create_mode() {
    console.log('entering into create mode');
    this.single_user_click_flag = false;
    this.create_mode = true;
    console.log('create mode flag ' + this.create_mode);

    this.meme_service.random_face_data().subscribe(
      (data: any) => {
        (this.user_form_data.address = ''),
          (this.user_form_data.age = ''),
          (this.user_form_data.cell = ''),
          (this.user_form_data.email = ''),
          (this.user_form_data.gender = ''),
          (this.user_form_data.name = ''),
          (this.user_form_data.picture = '');
      },
      (err) => {},
      () => {
        console.log('completed');
      }
    );
  }
  onSubmit() {
    console.log(this.user_information.value);
    this.face_data.push(this.user_information.value);
    this.create_mode = false;
  }
  creating_the_form() {
    this.user_information = this.formBuilder.group({
      address: [''],
      age: [''],
      cell: [''],
      email: [''],
      gender: [''],
      name: [''],
      picture: [''],
    });
  }
  out_of_create_mode() {
    this.create_mode = false;
  }
  single_user_clicked(user_data: RandomDataType) {
    this.single_user_click_flag = true;
    this.single_user_data = user_data;
    console.log(`single user data in user-component  ${this.single_user_data}`);
  }
  single_user_back_button_clicked() {
    this.single_user_click_flag = false;
  }
  auto_fill_data() {
    console.log('calling the autofill data function');
    this.user_information.controls.address.value = this.user_form_data.address;
    (this.user_information.controls.age.value = this.user_form_data.age),
      (this.user_information.controls.cell.value = this.user_form_data.cell),
      (this.user_information.controls.email.value = this.user_form_data.email),
      (this.user_information.controls.gender.value =
        this.user_form_data.gender),
      (this.user_information.controls.name.value = this.user_form_data.name),
      (this.user_information.controls.picture.value =
        this.user_form_data.picture);
    console.log('user form data =>');
    console.log(this.user_form_data);
    console.log('user adress information =>');
    console.log(this.user_information.controls.address.value);
  }
}
