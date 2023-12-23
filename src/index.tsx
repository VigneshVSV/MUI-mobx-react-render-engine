import { RenderEngine } from "mobx-render-engine"
import { styled } from "@mui/material/styles";


export class MUIRenderEngine extends RenderEngine {

    static StyledComponent(component : any, styles : any) {
        if (!styles)
            return component
        const StyledComponent = styled(component)(styles)
        return StyledComponent
    }
}