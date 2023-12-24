// Internal & 3rd party functional libraries
import React, { useState } from "react"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
// Custom functional libraries
// Internal & 3rd party component libraries
// Custom component libraries
import { RenderEngineComponentProps } from "mobx-render-engine"



export const ContextfulApp = observer(({state, renderer, logger} : RenderEngineComponentProps) => {

    const [setLocation, setSetLocation] = useState<Function>((loc : string) => { console.error(`setLocation not implemeneted. cannot redirect to ${loc}`) })
    const ErrorBackdrop = renderer.stateManager.errroBackdrop

    useEffect(() => {
        renderer.stateManager.actionDispatcher.hooks["setLocation"] = setLocation
    }, [setLocation])
 
    const children = state.computedChildren
    logger.logMounting('ContextfulApp', 'App')
  
    try{
        return (
            <>  
                {renderer.Children(children)}
            </>
            )
    } catch(error : any) {
        return (
            <ErrorBackdrop
                message="dashboard could not render due to error : "
                subMessage={error.message}
                goBack={() => renderer.stateManager.actionDispatcher.hooks["setGlobalLocation"]('/')}
            />
        )
    }
})