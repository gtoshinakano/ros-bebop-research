import styled from "styled-components"
import Link from "next/link"
import React from "react"
import {breakpoint} from "@Definitions/Styled"

export const Blockquote = styled.blockquote`
  background-color: ${props => props.theme.palette.markdown.blockquote.backgroundColor};
  color: ${props => props.theme.palette.markdown.blockquote.color};
  border-left: ${props => props.theme.palette.markdown.blockquote.borderLeft};
  padding: 1.8em 1em 1.8em 2.3em;
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
  ul{
    padding-left: 1.6em;
    list-style-type: square;
  }
  li{
    font-size: 1.1em;
    margin-bottom: 0.6em;
  }
`

export const ImgContainer = styled.div`
  float: ${props => props.styles.float || "left"};
  margin: ${props => props.styles.float==="right" ? "0 0 5px 10px" : "0 10px 5px 0"};
  max-width: ${props => props.styles.maxWidth || "43%" };
  ${breakpoint.xs} { 
    max-width: 100%; 
    display: ${props => props.styles.hidden === "mobile" && "none" };
    margin: 0;
  }
  ${breakpoint.sm} { 
    max-width: 100%; 
    display: ${props => props.styles.hidden === "mobile" && "none" };
    margin: 0;
  }
`

export const Hr = styled.hr`
  margin: 7.9vh 47% 7vh;
  border: 2px dashed #ccc; 
`

export const CustomLink = ({children, href}) => {
  return href.startsWith("http") 
  ? <a href={href} target="_blank">{children}</a> 
  : <Link href={href}><a>{children}</a></Link>
}