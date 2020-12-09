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
    const mdProps = JSON.parse(title) || {}
    return (
      <ImgContainer styles={mdProps}>
        <img src={src} alt={alt} style={imgStyles} />
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

const imgStyles = {
  width:"100%"
}



export {HighlightMarkdown}