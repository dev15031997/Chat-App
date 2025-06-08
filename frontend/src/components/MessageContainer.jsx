import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

const MessageContainer = () => {   
    return (
        <>
                  <div className='md:min-w-[550px] flex flex-col'>
                      <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2'>
                          <div className='avatar online'>
                              <div className='w-12 rounded-full'>
                                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtjzzQmczWipoZ5SH9Yj7HcCbwwFVC8rVvKQ&s' alt="user-profile" />
                              </div>
                          </div>
                          <div className='flex flex-col flex-1'>
                              <div className='flex justify-between gap-2'>
                                  <p>Devashish</p>
                              </div>
                          </div>
                      </div>
                      <Messages/>
                      <SendInput/>
                  </div>

        </>

    )
}

export default MessageContainer