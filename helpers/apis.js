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
export const getPostById = async (id, user) => {
  try {
    const { data } = await callApi.post(`api/post/${id}`, { user })

    return data
  } catch (error) {
    console.log('getPostById error api: ', error)
    return {}
  }
}
export const getLikePost = async ({ user_id, post_id }) => {
  try {
    const { data } = await callApi.post('api/like', { user_id, post_id })

    return data
  } catch (error) {
    console.log('getLikePost error api: ', error)
    return {}
  }
}
