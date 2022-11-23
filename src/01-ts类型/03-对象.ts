// 定义接口
interface Iobj {
    name: string,
    age: number,
    address?: string,
    [propName:string]: any
}

const obj1:Iobj = {
    name: 'wendy',
    age: 23
}

export default {};