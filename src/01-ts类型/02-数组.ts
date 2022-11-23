/* eslint-disable import/no-anonymous-default-export */
let list:string[] = ['11', '211', '43'];
let list1:number[] = [2,43,3];
let list2:(number | string)[] = [2,43,3, '0'];
let list3:Array<string | number> = [2,43,3, '0'];

for(var i in list) {
    list[i].substring(0, 1)
}


export default {};