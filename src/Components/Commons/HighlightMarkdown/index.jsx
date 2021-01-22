// ./CodeBlock.js
import React from "react"
import Prism from "prismjs"
import 'prismjs/components/prism-python'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import {Blockquote, ImgContainer, Hr, CustomLink} from "./styled"


const renderers = {
  code: ({language, value}) => {
    const plugins = language && language.split("@") 
    return (
      <pre className={plugins && plugins.join(" ")}>
        <code className={`language-${plugins && plugins[0]}`}>{value}</code>
      </pre>)
    },
  image: ({src, alt, title}) => {
    const initial = {style: {}}
    const mdProps = title ? {...initial, ...JSON.parse(title) } : initial
    return (
      <ImgContainer styles={mdProps.style}>
        <img 
          src={src} 
          alt={alt} 
          width="100%" 
          title={mdProps.title}
        />
        {mdProps.description && <small>{mdProps.description}</small>}
      </ImgContainer>
    )
  },
  blockquote: Blockquote,
  thematicBreak: Hr,
  link: CustomLink
}

const HighlightMarkdown = ({ children }) => {

  React.useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <ReactMarkdown
      renderers={renderers}
    >
      {children}
    </ReactMarkdown>
  )
}



export {HighlightMarkdown}