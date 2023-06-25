import { EmailValidator,ZipCodeValidator } from './FormValidator';

let sampleEmail = 'ajay@gmail.com';
let sampleZip = '29382';

let mail = new EmailValidator();
let zip = new ZipCodeValidator();

let emailResult = mail.isValid(sampleEmail);

let zipResult = zip.isValid(sampleZip);

console.log(`Is email valid? ${emailResult}`);
console.log(`Is zip code valid? ${zipResult}`);

