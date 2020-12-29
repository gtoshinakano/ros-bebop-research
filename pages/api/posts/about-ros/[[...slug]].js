import matter from 'gray-matter'
import _ from 'lodash'

const langs = ["en", "pt", "jp"]

export default async (req, res) => {
  const {slug, language} = req.query // beginner-commands with-python

  if(!language || !_.includes(langs, language)){
    res.statusCode = 404
    res.send("Error: Something went wrong")
  } else {
    let common = slug ? await import(`@Contents/about-ros/${slug[0]}/common.md`) : await import(`@Contents/about-ros/common.md`)
    let content = slug ? await import(`@Contents/about-ros/${slug[0]}/${language}.md`) : await import(`@Contents/about-ros/${language}.md`)
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