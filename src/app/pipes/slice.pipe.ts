import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  public transform(arr: Array<any>, minLength: number, maxLength: number) {
    let newArr:any
    // if(arr.length == 0){
    //   newArr = ['']
    // } else
    //  if (maxLength > arr.length) {
    //   newArr = arr?.slice(minLength,arr.length)
    //   console.log(newArr.length);
      
    // } else {
    //   newArr = arr?.slice(minLength,maxLength)
    //   console.log(newArr.length);
    // }
    // return newArr;
    newArr = arr?.slice(minLength,maxLength)
    return newArr;
  }

}
