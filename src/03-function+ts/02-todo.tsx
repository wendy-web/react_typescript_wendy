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
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}
