import axios from 'axios'

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://arilloid-velia-incretory.ngrok-free.dev',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor → tambahkan token otomatis
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Response interceptor → tangani error global
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
        console.warn('Token invalid, redirect login...')
        // contoh redirect ke login
        // window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export default API