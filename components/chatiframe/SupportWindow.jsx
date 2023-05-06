import React from "react";
import { styles } from "./styles";
import EmailForm from './EmailForm'
import Chat from './Chat'
import Login from './Login'
import Register from './Register'


const SupportWindow = props => {
    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
           
        
        <EmailForm />
        
            

        </div>
    )
}

export default SupportWindow;