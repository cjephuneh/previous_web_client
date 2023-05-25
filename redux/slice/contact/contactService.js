import axios from 'axios'

const contactUs = async(contactData) => {
    const res = await axios.post('/')
    return res.data 
}

export default contactUs
