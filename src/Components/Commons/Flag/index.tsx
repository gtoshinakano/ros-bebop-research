import React, {FunctionComponent} from 'react'
import Bra from "@Static/images/flag-br.svg"
import Eng from "@Static/images/flag-en.svg"
import Jap from "@Static/images/flag-jp.svg"

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
      return <img src={Bra} style={style} />
    case "en":
      return <img src={Eng} style={style} />
    case "jp":
      return <img src={Jap} style={style} />
  }
}

export {Flag}