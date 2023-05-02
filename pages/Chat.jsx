import { useState, useEffect } from 'react'
   export default function Chat(){
    const data = [
        {
            sender: 'Jane Doe',
            message: 'How are you sabjsajsa s cs csa csa csga cg sacg sacgs hg chas c c dsgc hc h chg c chgs hga ch hc ach scs ch sahcg c hgs?',
            time: '11:30pm'
        },
        {
            sender: 'me',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you sabjsajsa s cs csa csa csga cg sacg sacgs hg chas c c dsgc hc h chg c chgs hga ch hc ach scs ch sahcg c hgs?',
            time: '11:30pm'
        },
        {
            sender: 'me',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you sabjsajsa s cs csa csa csga cg sacg sacgs hg chas c c dsgc hc h chg c chgs hga ch hc ach scs ch sahcg c hgs?',
            time: '11:30pm'
        },
        {
            sender: 'me',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you sabjsajsa s cs csa csa csga cg sacg sacgs hg chas c c dsgc hc h chg c chgs hga ch hc ach scs ch sahcg c hgs?',
            time: '11:30pm'
        },
        {
            sender: 'me',
            message: 'How are you?',
            time: '11:30pm'
        },
        {
            sender: 'Jane Doe',
            message: 'How are you?',
            time: '11:30pm'
        },
    ]

    const [messages, setMessages] = useState(data)
    const [message, setMessage] = useState(null)

 
    return (
        
        <div className=" my-4 bg-gray-250 flex flex-col justify-between overflow-scroll" style={{
            scrollbarWidth: 'none',
        }}>
                <div className="sticky top-0 flex justify-between bg-white bg-opacity-5 backdrop-blur-lg drop-shadow-lg shadow p-3">
                    <p className="space-x-2">
                        <span className="text-gray-500">Assignee</span>
                        <span>Paul Leah</span>
                    </p>

                    <div className="px-3 py-1 border-2 border-blue-400 rounded flex space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Mark as Close</p>

                    </div>
                </div>

                <div className="space-y-4 flex flex-col px-2 flex-1 overflow-y-auto"style={{
            scrollbarWidth: 'none',
        }}>
                    {
                        messages.map((message, id) => (
                            <div key={id}  className={message.sender === 'me' ? "w-fit max-w-[70%] p-2 rounded-l-2xl rounded-tr-2xl self-end" : "w-fit max-w-[70%] p-2 rounded-r-2xl rounded-tl-2xl"}>
                                <div className="flex space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>

                                    {
                                        message.sender !== 'me' && (
                                            <p className="font-semibold">{message.sender}</p>
                                        )
                                    }

                                    <p className="text-gray-700">{message.time}</p>
                                </div>
                                <p className={message.sender !== 'me' ? 'bg-white w-full px-2 py-1 shadow rounded-b-lg rounded-tr-lg mt-1' : 'bg-blue-200 px-2 py-1 shadow rounded-b-lg rounded-tr-lg mt-1'}>{message.message}</p>
                            </div>
                        ))
                    }
                </div>

            <div className="flex space-x-2 mx-2 mb-2">
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className="flex-1 px-3 py-1 rounded focus:outline-none" placeholder="Type your message here..." />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-black">
                    <path d="M19 6H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2zM10 11v6M14 11v6" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1 1 0 0 0 .6-.8V9.8a1 1 0 0 0-.6-.8l-2.8-.9V6.4a3 3 0 0 0-2.9-3 3 3 0 0 0-2.9 3v1.7l-2.8.9a1 1 0 0 0-.6.8v4.4a1 1 0 0 0 .6.8l2.8.9v1.7a3 3 0 0 0 2.9 3 3 3 0 0 0 2.9-3v-1.7l2.8-.9z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="9" y1="9" x2="15.01" y2="9"/>
                
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                    <path d="M20 6.21V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.21m2.78-.71L12 3l3.22 2.5M16 7H8l4 4 4-4z"/>
                </svg>


                <button onClick={() => setMessages([...messages, {
                    sender: 'me',
                    message,
                    time: '11:30pm'
                }])} className="bg-blue-500 py-1 px-2 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}