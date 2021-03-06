import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-ion-datetime',
  template: `
    <ion-datetime
      [displayFormat]="to.displayFormat"
      [pickerFormat]="to.pickerFormat"
      [doneText]="to.doneText"
      [cancelText]="to.cancelText"
      [min]="to.min"
      [max]="to.max"
      [yearValues]="to.yearValues"
      [monthValues]="to.monthValues"
      [dayValues]="to.dayValues"
      [hourValues]="to.hourValues"
      [minuteValues]="to.minuteValues"
      [formControl]="formControl"
      [ionFormlyAttributes]="field">
    </ion-datetime>
  `,
})
export class FormlyFieldDatetime extends FieldType {
}
