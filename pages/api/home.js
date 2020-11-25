import matter from 'gray-matter'

export default async (req, res) => {
  console.log(req.query.language)
  const common = await import('@Contents/home/common.md')
  const meta = matter(common.default)
  const content = await import('@Contents/home/'+req.query.language+'.md')
  const parsedContent = matter(content.default)
  const seo = {...meta.data, ...parsedContent.data}
  res.statusCode = 200
  res.json({ 
    seo: seo,
    markdownBody: parsedContent.content,
  })
}