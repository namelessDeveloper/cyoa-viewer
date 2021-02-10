import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getConfig } from "../lib"
import { Config } from "../types"

export function useCyoa(){
  const [config, setConfig] = useState<null | Config>(null)
  const {pathname} = useLocation()

  useEffect(() => {
    // Path will be e.g. /cyoa-viewer/f728c844cd509bd87b5edaff8c15be2b
    const [gistID, filename] = pathname.substr(1).split('/').slice(1)
    getConfig(gistID, filename)
      .then(json => {
        if(json){
          setConfig(json)
          console.log(`Loaded "${json?.title}"`)
        }
      })
  }, [pathname])
  return config
}