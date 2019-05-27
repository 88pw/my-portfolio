import { createClient } from '~/plugins/contentful.js'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

export const fetchEntries = (contentType) => {
  client.getEntries({ contentType })
}
