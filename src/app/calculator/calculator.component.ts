import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}
  counter: string = '0';
  lastCounter: string = '';
  operator: string = '';
  operation: any;
  ngOnInit(): void {}
  addNumber(num: number) {
    if (this.counter === '0') {
      this.counter = `${num}`;
    } else {
      this.counter += `${num}`;
    }
  }
  clearAll() {
    this.counter = '0';
    this.operator=''
    this.operation=null
    this.lastCounter=''
  }
  addDot() {
    if (!this.counter.includes('.')) {
      this.counter += '.';
    }
  }
equal(){
  this.operation(this.lastCounter,this.counter)
  this.lastCounter=''
  this.operator=''
  this.operation=null
}

  addOperator(op: string) {
    if(this.operation){
      this.operation(this.lastCounter,this.counter)
  }
  if(this.counter === '0'){
    return 
  }
    switch (op) {
      case '*':
      this.lastCounter = this.counter;
      this.operation = (a: string, b: string) => {
        this.counter = (+a * +b).toString();
      };
      this.counter='0'
      this.operator='*'
        break;
      case '/':
        this.lastCounter = this.counter;
        this.operation = (a: string, b: string) => {
          this.counter = (+a / +b).toString();
        };
        this.operator='/'
        this.counter = '0';
        break;
      case '%':
        this.counter = (+this.counter/100).toString();
        break;
      case '-':
        this.lastCounter = this.counter;
        this.operation = (a: string, b: string) => {
          this.counter = (+a - +b).toString();
        };
        this.operator="-"
        this.counter = '0';
        break;
      case '+':
          this.lastCounter = this.counter;
          this.operation = (a: string, b: string) => {
            this.counter = (+a + +b).toString();
          };
          this.operator='+'
          this.counter = '0';
          break;
      default:
        this.operator = '';
        this.counter = '0';
        this.lastCounter = '';
        this.operation=null;
    }
  }
}
