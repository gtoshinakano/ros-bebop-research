import matter from 'gray-matter'

export default async (req, res) => {
  if(!req.query.language || !["en", "pt", "jp"].includes(req.query.language)){
    res.statusCode = 500
    res.send("Error: Something went wrong")
  } else {

    const common = await import('@Contents/about-bebop/common.md')
    const meta = matter(common.default)
    const content = await import('@Contents/about-bebop/'+req.query.language+'.md')
    const parsedContent = matter(content.default)
    const seo = {...meta.data, ...parsedContent.data}
    res.statusCode = 200
    res.json({ 
      seo: seo,
      markdownBody: parsedContent.content,
    })
  }
}