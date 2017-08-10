import { Component } from '@angular/core';

class SwitchBtn {
    on: boolean
    state: string
    constructor() {
        this.on = false;
        this.state = 'off'
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SwitchBoard';
    btnList: SwitchBtn[] = [];
    numBtns = 10;
    count = 0;
    constructor() {
        while(this.count < this.numBtns) {
            let newBtn = new SwitchBtn()
            this.btnList.push(newBtn);
            this.count++
        }
    }

    toggleSwitch(idx): void {
        if(this.btnList[idx].on == true) {
            this.btnList[idx].state = 'off';
            this.btnList[idx].on = false;
        } else {
            this.btnList[idx].state = 'on';
            this.btnList[idx].on = true;
        }


    }







}
