import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3';
  strData = 'My name is Rashmi Sharma';

  iCurrencyData = 3500000

  todayDateinMili = Date.now();
  todayDateObj = new Date();
  todayDateinString = new Date().toDateString();

  jsonEmpObj = { 'empid': 10, 'name': 'Rashmi' }

  jsonStudentObj = [
    { 'id': 10, 'name': 'Rashmi', 'marks': 56, stream: 'cse', location: 'Janakpuri' },
    { 'id': 20, 'name': 'Mary', 'marks': 78, stream: 'ece', location: 'Pune' },
    { 'id': 30, 'name': 'John', 'marks': 93, stream: 'me', location: 'Maharastra' },
    { 'id': 40, 'name': 'Alexa', 'marks': 67, stream: 'cse', location: 'Madhya Pradesh' },
    { 'id': 50, 'name': 'Twinkle', 'marks': 90, stream: 'me', location: 'Srinagar' },
    { 'id': 60, 'name': 'Zara', 'marks': 56, stream: 'eee', location: 'Andhra' },
    { 'id': 70, 'name': 'Yamini', 'marks': 49, stream: 'cse', location: 'Telangana' },
    { 'id': 80, 'name': 'Shyam', 'marks': 100, stream: 'ece', location: 'Nagpur' },
    { 'id': 90, 'name': 'Rita', 'marks': 8777, stream: 'me', location: 'Lucknow' }

  ]

  jsonInsuObj = [
    { policyNo: 10, policyHolder: 'Rashmi', amtMaturity: 90000, nominee: 'Jane', monthly: 9, duration: 12 },
    { policyNo: 11, policyHolder: 'Saya', amtMaturity: 75000, nominee: 'Austin', monthly: 9, duration: 1 },
    { policyNo: 12, policyHolder: 'Raveera', amtMaturity: 900780, nominee: 'Christin', monthly: 9, duration: 8 },
  ]

  decimalPipe = 12.78789849

  dataForPercentPipe = 345.58998
  dataForSlicePipe = 'Happiness'

  strSlice = 'Zurassic Park'
  strFirst: number = 0
  strSecond: number = 0

  iFarent = 0
  iCelcius = 0

  iSentence = 'This is Argentina!'

  fStream = ''


  fruits = ['Apple', ' Orange', ' Strawberry']
  addFruit(value: string) {
    this.fruits.push(value);
    console.log(this.fruits);
  }
}
