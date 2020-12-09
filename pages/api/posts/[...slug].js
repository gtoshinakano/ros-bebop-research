import matter from 'gray-matter'
import _ from 'lodash'

const validRoutes = [
  "about-bebop",
  "about-bebop/battery"
]

const langs = ["en", "pt", "jp"]

export default async (req, res) => {
  const route = req.query.slug.join("/")

  if(!req.query.language || !_.includes(langs, req.query.language)){
    res.statusCode = 404
    res.send("Error: Something went wrong")
  } else {
    if(_.includes(validRoutes, route)){
      let common
      let content
      switch(route){
        case validRoutes[0]:
          common = await import(`@Contents/about-bebop/common.md`)
          content = await import(`@Contents/about-bebop/${req.query.language}.md`)
        //case validRoutes[1]:
        //  common = await import(`@Contents/about-bebop/battery/common.md`)
        //  content = await import(`@Contents/about-bebop/battery/${req.query.language}.md`)
      }
      const meta = matter(common.default)
      const parsedContent = matter(content.default)
      const seo = {...meta.data, ...parsedContent.data}
      res.statusCode = 200
      res.json({ 
        seo: seo,
        markdownBody: parsedContent.content,
      })
    }else{
      res.statusCode = 404
      res.send("Error: API Route does not exist")   
    }
  }
}