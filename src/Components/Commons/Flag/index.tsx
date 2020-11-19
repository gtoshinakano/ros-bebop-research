import React, {FunctionComponent} from 'react'
import Bra from "../../../../public/static/images/flag-br.svg"
import Eng from "../../../../public/static/images/flag-en.svg"
import Jap from "../../../../public/static/images/flag-jp.svg"

interface IProps {
  width ?: number | string;
  height ?: number | string;
  flag: string;
}

const Flag:FunctionComponent<IProps> = (props) => {

  const style = {
    display: "inline",
    width: 22
  }

  switch (props.flag) {
    case "br":
      return <><Bra style={style} /></>
    case "en":
      return <>{"<Eng style={style} />"}</>
    case "jp":
      return <>{"<Jap style={style} />"}</>
  }
}

export {Flag}