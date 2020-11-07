import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://eventziapi.herokuapp.com',
})

async function callApiPost(url, data) {
  const response = await instance({
    method: 'POST',
    url,
    data,
  })

  if (response.data.token) {
    instance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.token}`
  }
  return response
}

async function callApiGet(url) {
  const response = await instance({
    method: 'GET',
    url,
  })

  return response
}

const ApiEventzi = {
  login(email, password) {
    let data = {
      email: email,
      psswd: password,
    }
    return callApiPost('/users/validate', data)
  },
  upcoming() {
    return callApiGet(`/events/upcoming`)
  },
}

export default ApiEventzi