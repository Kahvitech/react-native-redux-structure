const loginCheck = [
    { username: 'teste', password: 'Teste123' }
]

export default () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(loginCheck)
        }, 3000)
    })
}
