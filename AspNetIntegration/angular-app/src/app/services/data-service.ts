import { IProfile } from '../models/profile';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app.config";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    public getList(callback: (items: Array<string>) => void): void {
        var item = this.http.get<Array<string>>(AppConfig.apiBaseUrl + "/api/data/items")
            .subscribe(
                data => {
                    // Ho i dati
                    callback(data);
                },
                error => {
                    // Gestire eventuali errori della chiamata
                }
            );
    }
    
    public getProfile(): IProfile {
        return {
            name: "Piero",
            lastName: "De Tomi"
        };
    }
}