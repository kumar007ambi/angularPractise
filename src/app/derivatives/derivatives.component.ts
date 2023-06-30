import { Component } from '@angular/core';

@Component({
  selector: 'app-derivatives',
  templateUrl: './derivatives.component.html',
  styleUrls: ['./derivatives.component.css']
})
export class DerivativesComponent {
  secretPassword = false;
  log = [] as any;//declare array in this manner
  onToggleDetails(){
    this.secretPassword=!this.secretPassword;
    this.log.push(this.log.length+1)
  }
}
