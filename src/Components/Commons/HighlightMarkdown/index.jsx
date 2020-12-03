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
      const mdProps = JSON.parse(title) || {}
      return (
        <ImgContainer styles={mdProps}>
          <img src={src} alt={alt} style={imgStyles}/>
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
  float: ${props => props.styles.float || "left"};
  margin: ${props => props.styles.float==="right" ? "0 0 5px 10px" : "0 10px 5px 0"};
  max-width: ${props => props.styles.maxWidth || "43%" };
`

const imgStyles = {
  width:"100%"
}

export {HighlightMarkdown}