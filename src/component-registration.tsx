import { RenderEngine } from "mobx-render-engine";
import { ComponentStateMap } from "mobx-render-engine/src/state-container";
import { ComponentOutputMap } from "mobx-render-engine/src/stub-evaluator";
import { Logger, loglevels } from "mobx-render-engine/src/utils/logger";
import { StateManager } from "mobx-render-engine/src/state-manager";
import { RemoteFSMMap } from "mobx-render-engine/src/state-machine";

import { ContextfulMUIButton, ContextfulMUIhRefButton } from "./components/Button";
import { ContextfulMUITextField } from "./components/TextField";
import { ContextfulApp } from "./app";
import { ContextfulMUIBox } from "./components/Box";
import { ContextfulMUIDivider } from "./components/Divider";
import { ContextfulMUIStack } from "./components/Stack";
import { ContextfulMUIButtonGroup } from "./components/ButtonGroup";
import { ContextfulMUIRadio, ContextfulMUIRadioGroup } from "./components/Radio";
import { ContextfulMUIFormControlLabel } from "./components/FormControlLabel";





export function prepareRenderers(renderers : RenderEngine[]) {
    for (let renderer of renderers){
        // MUI components
        renderer.registerComponent("ContextfulMUIButton", ContextfulMUIButton)
        renderer.registerComponent("ContextfulMUIhRefButton", ContextfulMUIhRefButton)
        renderer.registerComponent("ContextfulMUIStack", ContextfulMUIStack)
        renderer.registerComponent("ContextfulMUIBox", ContextfulMUIBox)
        renderer.registerComponent("ContextfulMUITextField", ContextfulMUITextField)
        renderer.registerComponent("ContextfulMUIDivider", ContextfulMUIDivider)
        renderer.registerComponent("ContextfulMUIButtonGroup", ContextfulMUIButtonGroup)
        renderer.registerComponent("ContextfulMUIRadioGroup", ContextfulMUIRadioGroup)
        renderer.registerComponent("ContextfulMUIRadio", ContextfulMUIRadio)
        renderer.registerComponent("ContextfulMUIFormControlLabel", ContextfulMUIFormControlLabel)

        // App
        renderer.registerComponent("__App__", ContextfulApp)
    }
}

export function createStateManager(id : string, logLevel : string = 'DEBUG', hooks : any = {}) : StateManager {
    const visualizationComponentStateMap : ComponentStateMap = {}
    const visualizationComponentOutputMap : ComponentOutputMap = {}
    const visualizationRemoteFSMMap : RemoteFSMMap = {}
    const visualizationLogger = new Logger(`${id}-logger`, logLevel as loglevels)
    const visualizationStateManager = new StateManager(
        id, 
        visualizationLogger, 
        visualizationComponentStateMap, 
        visualizationComponentOutputMap, 
        visualizationRemoteFSMMap,
        hooks
    )
    prepareRenderers([visualizationStateManager.Renderer])
    return visualizationStateManager
}