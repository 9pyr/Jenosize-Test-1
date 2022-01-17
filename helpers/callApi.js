import axios from 'axios'

const local = process.env.PUBLIC_BASE_URL
export default axios.create({ baseURL: local })
