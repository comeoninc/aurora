import {bindable} from 'aurelia-framework';

export class MyAwesomeElement {
  @bindable value;

  valueChanged(newValue, oldValue) {
    //
  }
}
