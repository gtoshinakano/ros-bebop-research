import matter from 'gray-matter'
import _ from 'lodash'

const langs = ["en", "pt", "jp"]

export default async (req, res) => {
  const page = req.query.page // beginner-commands with-python

  if(!req.query.language || !_.includes(langs, req.query.language)){
    res.statusCode = 404
    res.send("Error: Something went wrong")
  } else {//TODO Logic to handle dynamic page import 
    let common = await import(`@Contents/about-ros/${req.query.page}/common.md`)
    let content = await import(`@Contents/about-ros/${req.query.page}/${req.query.language}.md`)
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