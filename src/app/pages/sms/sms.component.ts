// import { Component, OnChanges, DoCheck, AfterViewChecked, OnInit } from '@angular/core';
// import { Directive, ElementRef, Input, AfterContentInit, Renderer } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html'
})
export class SmsComponent implements OnInit {

  cantCaracteres: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

// export class AppComponent {
//   fname = 'Angular 4';
// }

// @Directive({ selector: '[inputfocus]' })

// export class InputFocusedDirective implements DoCheck {
//   public valLength;
//   @Input() inputfocus;
//   constructor(public el: ElementRef, public renderer: Renderer) { }
  
//   ngDoCheck() {
//       let valLength = this.el.nativeElement.value.length;
//       console.log("valLength " + valLength);

//       if (valLength > 0) {
//           this.renderer.setElementClass(this.el.nativeElement.parentElement, 'focused', true);
//       }
//       else {
//           this.renderer.setElementClass(this.el.nativeElement.parentElement, 'focused', false);
//       }
//   }

// }