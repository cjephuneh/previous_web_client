import axios from 'axios'
import { BASE_URI } from '../../../components/utils/ApiUrls'


const waitlist = async(waitlistData) => {
    const res = await axios.post(`${BASE_URI}/waitlist/`, {
        first_name: waitlistData.firstName,
        last_name: waitlistData.lastName,
        email: waitlistData.email
    })
    return res.data 
}

export default waitlist
