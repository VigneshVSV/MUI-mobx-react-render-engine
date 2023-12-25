import { RenderEngine } from "mobx-render-engine";

import { ContextfulButton, ContextfulhRefButton } from "./components/Button";
import { ContextfulTextField } from "./components/TextField";
import { ContextfulBox } from "./components/Box";
import { ContextfulDivider } from "./components/Divider";
import { ContextfulStack } from "./components/Stack";
import { ContextfulButtonGroup } from "./components/ButtonGroup";
import { ContextfulRadio, ContextfulRadioGroup } from "./components/Radio";
import { ContextfulFormControlLabel } from "./components/FormControlLabel";


export function prepareRenderers(renderers : RenderEngine[]) {
    for (let renderer of renderers){
        renderer.registerComponent("ContextfulMUIButton", ContextfulButton)
        renderer.registerComponent("ContextfulMUIhRefButton", ContextfulhRefButton)
        renderer.registerComponent("ContextfulMUIStack", ContextfulStack)
        renderer.registerComponent("ContextfulMUIBox", ContextfulBox)
        renderer.registerComponent("ContextfulMUITextField", ContextfulTextField)
        renderer.registerComponent("ContextfulMUIDivider", ContextfulDivider)
        renderer.registerComponent("ContextfulMUIButtonGroup", ContextfulButtonGroup)
        renderer.registerComponent("ContextfulMUIRadioGroup", ContextfulRadioGroup)
        renderer.registerComponent("ContextfulMUIRadio", ContextfulRadio)
        renderer.registerComponent("ContextfulMUIFormControlLabel", ContextfulFormControlLabel)
    }
}