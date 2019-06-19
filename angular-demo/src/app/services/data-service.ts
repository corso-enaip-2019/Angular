import { IProfile } from '../models/profile';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    constructor(private location: Location) {
    }
    
    public getProfile(): IProfile {
        return {
            name: "Piero",
            lastName: "De Tomi"
        };
    }
}