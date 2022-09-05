import fetch from 'node-fetch'

const { VITE_GOOGLE_CALENDAR_API_KEY, VITE_CALENDAR_ID } = process.env

const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${VITE_CALENDAR_ID}/events?${BASEPARAMS}
`

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET',
}

export const handler = async (event, context) => {
  const finalUrl = `${BASEURL}&key=${VITE_GOOGLE_CALENDAR_API_KEY}${
    event.queryStringParameters.maxResults
      ? `&maxResults=${event.queryStringParameters.maxResults}`
      : ''
  }`
  try {
    if (event.httpMethod === 'GET') {
      return fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => ({
          statusCode: 200,
          body: JSON.stringify(data.items, null, 2),
          headers: headers,
        }))
    }
    return {
      statusCode: 401,
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: error.toString(),
    }
  }
}
