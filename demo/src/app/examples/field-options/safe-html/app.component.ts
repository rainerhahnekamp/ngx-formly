import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {terms: false};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept <a href="https://opensource.org/licenses/MIT" target="_blank">Terms</a>',
        description: 'In order to proceed, please accept terms',
        safeHtml: true,
        required: true,
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
