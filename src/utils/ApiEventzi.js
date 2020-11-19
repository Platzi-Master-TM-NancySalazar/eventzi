import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://eventziapi.herokuapp.com'
})

async function callApiPost (url, data) {
  const response = await instance({
    method: 'POST',
    url,
    data
  })

  if (response.data.token) {
    instance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
  }
  return response
}

async function callApiGet (url) {
  const response = await instance({
    method: 'GET',
    url
  })

  return response
}

async function callApiImage (url) {
  const response = await instance({
    method: 'GET',
    url
  })

  const ImgBase64 = Buffer.from(response.data.image.data, 'hex').toString('base64')
  return `data:image/jpeg;base64,${ImgBase64}`
}

async function callApiPostMulti (url, formData) {
  const response = await instance({
    method: 'POST',
    url,
    // headers: {
    //   'Content-Type': 'multipart/form-data'
    // },
    data: formData
  })

  console.log(response)
  return response
}

async function callApiDelete (url) {
  const response = await instance({
    method: 'DELETE',
    url
  })

  return response
}

const ApiEventzi = {
  login (email, password) {
    const data = {
      email: email,
      psswd: password
    }
    return callApiPost('/users/validate', data)
  },
  upcoming () {
    return callApiGet('/events/upcoming')
  },
  getOrganizations () {
    return callApiGet('/organizations/orgsByUser')
  },
  newOrganization (formData) {
    return callApiPostMulti('/organizations', formData)
  },
  getEventsByOrganization (organizationId) {
    return callApiGet(`/organizations/${organizationId}/events`)
  },
  newEvent (
    id_organization,
    event_name,
    event_type,
    status_,
    event_description,
    date,
    url,
    template
  ) {
    const data = {
      event_name,
      event_type,
      status_,
      event_description,
      date,
      url,
      template
    }
    return callApiPost(`/events/organizations/${id_organization}`, data)
  },
  testEvent () {
    const data = {
      event_name: 'Testing',
      event_type: 'Online',
      status_: 'Published',
      event_description: 'Insert description',
      date: '2020-11-11 18:00:00',
      url: 'www.google.com',
      template: 'Template 1'
    }
    return callApiPost('/events/organizations/59', data)
  },
  getOrganizers (organizationId) {
    return callApiGet(`/organizations/${organizationId}/events/organizers`)
  },
  deleteEvent (eventId) {
    return callApiDelete(`events/${eventId}`)
  },
  sendAgenda (userId, organizationId, data) {
    return callApiPost(
      `events/${userId}/speaker/${organizationId}/schedule`,
      data
    )
  },
  getImage (idEvent) {
    return callApiImage(`/events/${idEvent}/media`)
  }
}

export default ApiEventzi
