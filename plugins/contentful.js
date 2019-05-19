const contentful = require('contentful')
const connection = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
})

export default connection
