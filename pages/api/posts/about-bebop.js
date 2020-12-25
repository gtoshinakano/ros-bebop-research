import matter from 'gray-matter'
import _ from 'lodash'

const langs = ["en", "pt", "jp"]

export default async (req, res) => {

  if(!req.query.language || !_.includes(langs, req.query.language)){
    res.statusCode = 404
    res.send("Error: Something went wrong")
  } else {
    let common = await import(`@Contents/about-bebop/common.md`)
    let content = await import(`@Contents/about-bebop/${req.query.language}.md`)
    const meta = matter(common.default)
    const parsedContent = matter(content.default)
    const seo = {...meta.data, ...parsedContent.data}
    res.statusCode = 200
    res.json({ 
      seo: seo,
      markdownBody: parsedContent.content,
    })
  }
}