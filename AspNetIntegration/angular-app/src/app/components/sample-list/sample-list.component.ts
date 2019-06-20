import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
    selector: "sample-list",
    templateUrl: "./sample-list.component.html",
    styleUrls: [ "./sample-list.component.scss" ]
})
export class SampleList {
    public newElement: string;

    public list: Array<string>;

    public isButtonDisabled: boolean;

    constructor(data: DataService) {
        this.newElement = null;
        
        var self: SampleList = this;
        
        data.getList(function(items: Array<string>): void {
            self.list = items;
        });
        
        this.isButtonDisabled = false;
    }

    public addItem(): void {
        if(this.newElement !== undefined && this.newElement !== null && this.newElement !== "")
            this.list.push(this.newElement);

        this.newElement = null;
    };
}