// ./CodeBlock.js
import React from "react"
import Prism from "prismjs"
import ReactMarkdown from "react-markdown"

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

export {HighlightMarkdown}