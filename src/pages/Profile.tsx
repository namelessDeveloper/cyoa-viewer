import React, { useContext } from "react"
import { PointTracker } from "../components/PointTracker"
import { Config, Direction } from "../types"
import {Section} from '../components'
import styled from "styled-components"
import { PointContext } from "../containers/PointContainer"

interface Props {
  config: Config
}

export const Profile: React.FC<Props> = ({
  config,
}) => {

  return (
    <Layout direction={config?.direction || "column"}>
    {config.sections.map((sect, key) => 
      <Section data={sect} key={key}/>
    )}
  </Layout>
  )
}

const Layout = styled.div<{direction: Direction}>`
  display: flex;
  flex-direction: ${p => p.direction};
`