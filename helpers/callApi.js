import axios from 'axios'

const local = `http://localhost:3000/`
export default axios.create({ baseURL: local })
