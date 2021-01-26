const urlMetadata = require('url-metadata')

export default async (req, res) => {
  const metadata = await urlMetadata('https://github.com/gtoshinakano')
  res.statusCode = 200
  res.json({ image: metadata.image })
}
