// ./CodeBlock.js
import React from "react"
import Prism from "prismjs"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import {Blockquote, ImgContainer, Hr, CustomLink} from "./styled"


const renderers = {
  code: ({language, value}) => {
    return (
      <pre>
        <code className={`language-${language}`}>{value}</code>
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