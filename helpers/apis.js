import callApi from './callApi'

export const getPosts = async () => {
  try {
    const { data } = await callApi.get(`api/posts`)

    return data
  } catch (error) {
    console.log('getPosts error api: ', error)
    return []
  }
}
export const getPostById = async (id) => {
  try {
    const { data } = await callApi.get(`api/post/${id}`)

    return data
  } catch (error) {
    console.log('getPostById error api: ', error)
    return {}
  }
}
