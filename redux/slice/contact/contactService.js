import axios from 'axios'
import { BASE_URI} from '../../../components/utils/ApiUrls'

const contactUs = async(contactData) => {
    const res = await axios.post(`${BASE_URI}`,{
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message,
    }

    )
    console.log(contactData)
    return res.data 
}

export default contactUs





