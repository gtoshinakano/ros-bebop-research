const urlMetadata = require('url-metadata')

export default async (req, res) => {
  const metadata = await urlMetadata('https://www.facebook.com/toshi.nakano.9')
  res.statusCode = 200
  res.json({ image: metadata.image })
}
