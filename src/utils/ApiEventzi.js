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

async function callApiPut(url, data) {
  const response = await instance({
    method: 'PUT',
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

async function callApiDelete(url) {
  const response = await instance({
    method: 'DELETE',
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
  getOrganizations() {
    return callApiGet('/organizations/orgsByUser')
  },
  newOrganization(organization_name, description) {
    let data = {
      organization_name,
      description,
    }
    return callApiPost('/organizations', data)
  },
  getEventsByOrganization(organizationId) {
    return callApiGet(`/organizations/${organizationId}/events`)
  },
  getSpeakers(eventId) {
    return callApiGet(`events/${eventId}/speakers`)
  },
  getPartners(eventId) {
    return callApiGet(`/partners/events/${eventId}`)
  },
  getGeneral(eventId) {
    return callApiGet(`/events/${eventId}`)
  },
  postSpeaker(eventId, data) {
    return callApiPost(`/events/${eventId}/speakers/new`, data)
  },
  putSpeaker(speakerId, data) {
    return callApiPut(`/events/speakers/${speakerId}`, data)
  },
  postAssociate(eventId, data) {
    return callApiPost(`/partners/events/${eventId}`, data)
  },
  putAssociate(associateId, data) {
    return callApiPut(`/partners/${associateId}`, data)
  },
  putGeneral(eventId, data) {
    return callApiPut(`events/${eventId}`)
  },
  newEvent(
    id_organization,
    event_name,
    event_type,
    status_,
    event_description,
    date,
    url,
    template
  ) {
    let data = {
      event_name,
      event_type,
      status_,
      event_description,
      date,
      url,
      template,
    }
    return callApiPost(`/events/organizations/${id_organization}`, data)
  },
  testEvent() {
    let data = {
      event_name: 'Testing',
      event_type: 'Online',
      status_: 'Published',
      event_description: 'Insert description',
      date: '2020-11-11 18:00:00',
      url: 'www.google.com',
      template: 'Template 1',
    }
    return callApiPost(`/events/organizations/59`, data)
  },
  getOrganizers(organizationId) {
    return callApiGet(`/organizations/${organizationId}/events/organizers`)
  },
  deleteEvent(eventId) {
    return callApiDelete(`events/${eventId}`)
  },
  sendAgenda(userId, organizationId, data) {
    return callApiPost(
      `events/${userId}/speaker/${organizationId}/schedule`,
      data
    )
  },
}

export default ApiEventzi
