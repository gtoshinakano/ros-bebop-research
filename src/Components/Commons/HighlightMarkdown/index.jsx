// ./CodeBlock.js
import React from "react"
import Prism from "prismjs"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const HighlightMarkdown = ({ children }) => {

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const renderers = {
    code: ({language, value}) => {
      return (
        <pre>
          <code className={`language-${language}`}>{value}</code>
        </pre>)
      },
    image: ({src, alt, title}) => {
      return (
        <ImgContainer>
          <img src={src} alt={alt} title={title} style={imgStyles}/>
        </ImgContainer>
      )
    }
  }
  return (
    <ReactMarkdown
      renderers={renderers}
    >
      {children}
    </ReactMarkdown>
  )
}

const ImgContainer = styled.div`
  float: right;
  max-width: 45%;
`

const imgStyles = {
  width:"100%"
}

export {HighlightMarkdown}