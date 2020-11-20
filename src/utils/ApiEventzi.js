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

async function callApiPut (url, data) {
  const response = await instance({
    method: 'PUT',
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
  newOrganization (name, description) {
    const data = {
      organization_name: name,
      description
    }
    return callApiPost('/organizations', data)
  },
  getEventsByOrganization (organizationId) {
    return callApiGet(`/organizations/${organizationId}/events`)
  },
  newEvent (id_organization, event_name, event_type, event_description, date, url, template) {
    const bodyFormData = new FormData()
    bodyFormData.append('event_name', event_name)
    bodyFormData.append('event_type', event_type)
    bodyFormData.append('event_description', event_description)
    bodyFormData.append('date', date)
    bodyFormData.append('url', url)
    bodyFormData.append('template', template)

    return callApiPost(`/events/organizations/${id_organization}`, bodyFormData)
  },
  getSpeakers (eventId) {
    return callApiGet(`events/${eventId}/speakers`)
  },
  getPartners (eventId) {
    return callApiGet(`/partners/events/${eventId}`)
  },
  getGeneral (eventId) {
    return callApiGet(`/events/${eventId}`)
  },
  postSpeaker (eventId, data) {
    return callApiPost(`/events/${eventId}/speakers/new`, data)
  },
  putSpeaker (speakerId, data) {
    return callApiPut(`/events/speakers/${speakerId}`, data)
  },
  postAssociate (eventId, data) {
    return callApiPost(`/partners/events/${eventId}`, data)
  },
  putAssociate (associateId, data) {
    return callApiPut(`/partners/${associateId}`, data)
  },
  putGeneral (eventId, data) {
    return callApiPut(`events/${eventId}`, data)
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
  getOrganizers () {
    return callApiGet('organizations/events/organizers')
  },
  sendOrganizers (eventId, data) {
    return callApiPost(
      `/events/${eventId}/users/`,
      data
    )
  },
  deleteOrganizers (id_user_event) {
    return callApiDelete(`/events/organizers/${id_user_event}/delete`)
  },
  getEvents () {
    return callApiGet('events/byAdmin')
  },
  deleteEvent (eventId) {
    return callApiDelete(`events/${eventId}`)
  },
  deleteOrganizations (organizationId) {
    return callApiDelete(`/organizations/${organizationId}`)
  },
  sendAgenda (userId, organizationId, data) {
    return callApiPost(
      `events/${userId}/speaker/${organizationId}/schedule`,
      data
    )
  },
  getImage (idEvent) {
    return callApiImage(`/events/${idEvent}/media`)
  },
  publishEvent (eventId) {
    return callApiPut(
      `/events/${eventId}/publish`
    )
  },
  unPublishEvent (eventId) {
    return callApiPut(
      `/events/${eventId}/unpublish`
    )
  }
}

export default ApiEventzi
