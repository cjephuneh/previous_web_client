import React, { useState } from 'react'

import { styles } from './styles'

// import { LoadingOutlined } from '@ant-design/icons'

import Iframe from './Iframe'
import Link from 'next/link'
import { useRouter } from 'next/router'

const EmailForm = props => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const handleSubmit = ( e)=> {
        e.preventDefault()
        router.push("Chat")
    }

    return(
        <div
            style={{
                ...styles.emailFormWindow,
                ...{
                    height: '100%',
                    opacity: '1',
                }
            }}
        >
            <div style={{ height: '0px' }}>
                <div style={styles.stripe} />

                <div classname="transition-5"
                    style={{
                        ...styles.loadingDiv,
                        ...{
                            zIndex: loading ? '10' : '-1',
                            opacity: loading ? '0.33' : '0'
                        }
                    }}
                
                />

                 <div style={{ position: 'absolute', height: '100%', width: '100%', textAlign: 'center' }}>
                

                <div style={styles.topText}>
                    Welcome to my <br /> support 👋
                </div>
                 
                <div className="flex flex-col items-center -m-36">
                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onSubmit={e => handleSubmit(e)} >
                     QuickChat?
                </a>
                <a href="/pages/blog.js" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                     SecureChat?
                </a>
                </div>

              

            </div>
            
        </div>
        </div>
    )
}


export default EmailForm