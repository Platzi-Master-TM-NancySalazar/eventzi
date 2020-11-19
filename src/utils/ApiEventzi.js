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
  newEvent(id_organization, event_name, event_type, event_description, date, url, template) {

    var bodyFormData = new FormData();
    bodyFormData.append('event_name', event_name);
    bodyFormData.append('event_type', event_type);
    bodyFormData.append('event_description', event_description);
    bodyFormData.append('date', date);
    bodyFormData.append('url', url);
    bodyFormData.append('template', template);

    return callApiPost(`/events/organizations/${id_organization}`, bodyFormData)
  },
 
  getOrganizers(organizationId) {
    return callApiGet(`/organizations/${organizationId}/events/organizers`)
  },
  sendOrganizers(eventId, userId){
    return callApiPost(
      `events/${eventId}/users/${userId}`,
      data
    )
  },
  getEvents(organizationId){
    return callApiGet(`organizations/${organizationId}/events`)
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
  publishEvent(eventId){
    return callApiPut(
      `events/${eventId}/publish`
    )
  }
}

export default ApiEventzi
