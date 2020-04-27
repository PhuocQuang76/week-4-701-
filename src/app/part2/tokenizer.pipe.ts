import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenizer'
})
export class TokenizerPipe implements PipeTransform {

  transform(value: string, token: string): any {
    let arrValue;
    if (!token) {
      token = ',';
      arrValue = value.split('');
      return arrValue.join(token);
    } else {
      arrValue = value.split('');
      return arrValue.join(token);
    }
  }
}
