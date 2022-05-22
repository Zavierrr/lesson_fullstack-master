import { useState } from 'react'

function Dog() {
    // 定义在函数内部，方便维护
    let [isBarking, setIsBarking] = useState(false)
    let [isRunning, setIsRunning] = useState(false)
    const handleClick = () => {
        // DOM编程一去不复返
        setIsBarking(true)
        setIsRunning(true)
        setTimeout(() => {
            setIsBarking(false)
            setIsRunning(false)
        }, 2000)
    }
    return (
        <div onClick={handleClick}>
            <div>Dog</div>
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRunning && '溜了溜了'}</p>
        </div>
    )

}
export default Dog