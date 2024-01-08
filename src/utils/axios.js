import axios from 'axios'
// config
// import { HOST_API } from 'src/config-global'

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: 'https://server.blog.digiunction.com' })

axiosInstance.interceptors.response.use(
  res => res,
  error => {
    const errorMessage =
      error.response && error.response.data ? error.response.data.message : 'Something went wrong'

    return Promise.reject(errorMessage)
  }
)

export default axiosInstance

// ----------------------------------------------------------------------
export const fetcher = async args => {
  const [url, config] = Array.isArray(args) ? args : [args]
  const res = await axiosInstance.get(url, { ...config })
  return res.data
}
export const put_fetcher = async (url, body) => {
  const res = await axiosInstance.put(url, body);
  return res.data;
};
// ----------------------------------------------------------------------

export const baseUrl = 'https://server.blog.digiunction.com'
export const token = typeof window !== "undefined" ? sessionStorage.getItem('accessToken') : null;
export const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const endpoints = {
  chat: '/api/chat',
  kanban: '/api/kanban',
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    login: '/api/user/login',
    register: '/api/auth/register',
  },
  mail: {
    list: '/api/mail/list',
    details: '/api/mail/details',
    labels: '/api/mail/labels',
  },
  post: {
    list: '/api/post/get-all?page=0',
    top_viewed: '/api/post/top-viewed',
    top_shared: '/api/post/top-shared',
    top_liked: '/api/post/top-liked',
    by_category: '/api/post/category'
  },
  category: {
    list: '/api/category/get-all',
    details: '/api/category/details',
    latest: '/api/category/latest',
    search: '/api/category/search',
  },
  product: {
    list: '/api/product/list',
    details: '/api/product/details',
    search: '/api/product/search',
    imageUpload: '/api/hotels/uploadImage',
    create: '/api/hotels/createHotel'
  },
  api: {
    list: '/api/user/getHotelStats',
    create: '/api/user/createHotelsStatus',
    statusChnage: '/api/user/changeHotelsStatus',
    delete: '/api/user/deleteHotelsStatus'

  },
  user: {
    statusChnage: '/api/user/changeStatus'
  }
}
