import axios from 'axios'

const waitlist = async(waitlistData) => {
    const res = await axios.post('/')
    return res.data 
}

export default waitlist
