import fetch from 'node-fetch'

const { VITE_GOOGLE_CALENDAR_API_KEY, VITE_CALENDAR_ID } = process.env

const BASEPARAMS = `orderBy=startTime&singleEvents=true&timeMin=${new Date().toISOString()}`
const BASEURL = `https://www.googleapis.com/calendar/v3/calendars/${VITE_CALENDAR_ID}/events?${BASEPARAMS}
`

const HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'GET',
}

export async function handler(event, context) {
  const finalUrl = `${BASEURL}${`&maxResults=9`
    // event.queryStringParameters.maxResults
    //   ? `&maxResults=${event.queryStringParameters.maxResults}`
    //   : ''
  }&key=${VITE_GOOGLE_CALENDAR_API_KEY}`
  try {
    if (event.httpMethod === 'GET') {
      return fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => ({
          statusCode: 200,
          body: JSON.stringify(data.items, null, 2),
          HEADERS,
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
