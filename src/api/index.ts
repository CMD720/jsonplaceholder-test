import axios from "axios";


export const getAxiosPosts = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
}

export const getPostsComments = async (postId: number) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    return data
}

export const getUserPosts = async (userId: number) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    return data
}

export const getUser = async (userId: number) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    return data
}
