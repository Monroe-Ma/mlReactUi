import React from "react"
  type Props = {
    visible: boolean
    // onClick:()=>void
  }
const Dialog:React.FC<Props> = (props) => { 

  return (
    props.visible ?
      <div >
        {props.children }
    </div>:null
    )
}
export default Dialog