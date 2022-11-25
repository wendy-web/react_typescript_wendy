import React, { useState } from 'react'

export default function App() {
    const [nameValue, setnameValue] = useState<string>('wendy');

    return (
        <div>
            <p>state的值</p>
            <p>state的格式化的使用：{nameValue}</p>
            <button onClick={() => {
                setnameValue('wen');
            }}>点击更改state中string的值</button>
        </div>
    )
}
