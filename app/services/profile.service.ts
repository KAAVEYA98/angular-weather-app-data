import { Injectable } from '@angular/core';
import { Profile } from '../profile/profile';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class ProfileService {
  private profiles: Profile[];

  constructor() {
    this.profiles = [
      new Profile('Default Profile', ['Chennai', 'Bangalore', 'Delhi'])
    ]
  }

  public getProfiles() {
    return this.profiles;
  }


  
}