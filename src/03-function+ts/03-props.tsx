import React, { useRef, useState } from 'react'

export default function App() {
    const textRef = useRef<HTMLInputElement>(null);
    const [inputValue, setinputValue] = useState<string>('');
    const [list, setlist] = useState<string[]>([]);

    return (
        <div>
            <p>ref的类型的检查</p>
            <input ref={textRef} value={inputValue} onChange={() =>{
                setinputValue((textRef.current as HTMLInputElement).value);
            }} />
            <button onClick={() => {
                setlist([...list, inputValue])
                
            }}>获取input的值</button>
            <ul>
                {list.map((item, index) => {
                    return <Item key={index} value={item}></Item>
                })}
            </ul>
        </div>
    )
}
interface Ipros {
    value: string
}
// function Item(props:Ipros) {
//     return <li>
//         {props.value}
//     </li>
// }

// 定义赋值的方式的书写
const Item:React.FC<Ipros> = (props) => {
    return <li>
        {props.value}
    </li>
}
