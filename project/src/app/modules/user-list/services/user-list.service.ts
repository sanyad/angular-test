import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, of} from "rxjs";
import {UserModel} from "../models/User.model";

const mocks = [
  {
    id: 1,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'qwerty',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '235tgd_vxcvd'
  },
  {
    id: 2,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'asdf',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '364gV_sfsd'
  },
  {
    id: 3,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'ghjkl',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '35t3fv_324fd'
  },
  {
    id: 4,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'tyuouy343',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '23VGsdf'
  },
  {
    id: 5,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'kly98',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '4fdsfFD4_d'
  },
  {
    id: 6,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'james001',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: 'daasdfg32432'
  },
  {
    id: 7,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'agent',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '6456dfgdfgFD'
  },
  {
    id: 8,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'agent007',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '675hfghg'
  },
  {
    id: 9,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'saint',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '647565665435f'
  },
  {
    id: 10,
    firstname: 'Jason',
    lastname: 'Statham',
    username: 'JS',
    email: 'jst1975@example.com',
    role: 'Driver',
    password: '[26$7657567'
  }
]

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  mocks = mocks;

  constructor() { }

  getUserList(): Observable<UserModel[]> {
    return of(this.mocks.map(d => new UserModel(d)));
  }
}
