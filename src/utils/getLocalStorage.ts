
export const getCartLocalStorage = () => {
    const data = localStorage.getItem('userSelected')
    return data ? JSON.parse(data) : 0
}

