import React from "react";
import "tailwindcss/tailwind.css";
import { styles } from "./styles";
import EmailForm from './EmailForm'
import Chat from './Chat'
import Register from './Login'


const SupportWindow = props => {
    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
           
            <Register />
            

        </div>
    )
}

export default SupportWindow;