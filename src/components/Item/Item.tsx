import React, { useState } from "react"
import { theme } from "../../style"
import { Direction, Item as ItemInterface } from "../../types"
import { ItemWrapper } from "./styles"

import {
  Image, Text, Title
} from './components'

interface Props {
  data:ItemInterface,
  onClick?:(cost:number)=>void,
}

export const Item: React.FC<Props> = ({
  data,
  onClick,
}) => {

  const [toggled, setToggled] = useState(false)

  function handleClick(){
    if(data.cost && onClick){
      if(!toggled){
        onClick(data.cost)
        setToggled(true)
      } else {
        onClick(-data.cost)
        setToggled(false)
      }
    }
  }

  return (
    <ItemWrapper
      toggled={toggled}
      toggleColor={data.cost && data.cost > 0 ? theme.plus : theme.minus}
      onClick={handleClick}
      direction={data.direction || "row"}
      width={data.width}
      affordable={true} // TODO context points
    >

      {data.parts.map(part => {
        switch (part.type) {
          case "image": return <Image src={part.src} width={part.width}/>    
          case "text": return <Text cost={data.cost} body={part.body} header={part.header}/>
          case "title": return <Title cost={data.cost} text={part.text} />
          default: return null
        }
      })}
    </ItemWrapper>
  )
}