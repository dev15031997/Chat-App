import React, { useEffect, useRef } from 'react'

const Message = ({message}) => {
    const scroll = useRef();

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    
    return (
        <div ref={scroll} className='chat chat-end'>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjzzQmczWipoZ5SH9Yj7HcCbwwFVC8rVvKQ&s' />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">12:45</time>
            </div>
            <div className='chat-bubble bg-gray-200 text-black'>You were the chosen one!</div>
        </div>
    )
}

export default Message