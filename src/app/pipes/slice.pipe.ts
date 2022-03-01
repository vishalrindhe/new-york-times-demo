import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  public transform(arr: Array<any>, minLength: number, maxLength: number) {
    // let newArr = arr.slice();
    // if (minLength && newArr.length < minLength) {
    //   newArr.length = minLength;
    // } else if (maxLength && newArr.length > maxLength) {
    //   newArr.length = maxLength;
    // }
    // return newArr;
    let newArr = arr?.slice(minLength,maxLength)
    return newArr;
  }

}
