import axios from 'axios'

const getAllblogPosts = async() => {
    const res = await axios.get('/')
    return res.data 
}

export default getAllblogPosts
