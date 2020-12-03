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
    },
    blockquote: Blockquote
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

const Blockquote = styled.blockquote`
  background-color: ${props => props.theme.palette.markdown.blockquote.backgroundColor};
  color: ${props => props.theme.palette.markdown.blockquote.color};
  border-left: ${props => props.theme.palette.markdown.blockquote.borderLeft};
  padding: 1.8em 1em 1.8em 2.5em;
  margin: 2.1em 0 0.8em;
  line-height: 2em;
  font-family: Noto Sans JP;
  letter-spacing: -0.026em;
  p {
    margin:0.5em 0 0;
  }
  h5{
    color:${props => props.theme.palette.common.color};
    font-weight: 600;
    margin-bottom: 1em;
  }
  ul{padding-left: 1.6em;}
  li{
    font-size: 1.2em;
    margin-bottom: 0.6em;
  }
`

export {HighlightMarkdown}