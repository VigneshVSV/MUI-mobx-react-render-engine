import React from 'react';
import { RenderEngine } from "mobx-render-engine"
import { styled } from "@mui/material/styles";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export class MUIRenderEngine extends RenderEngine {

    static StyledComponent(component : any, styles : any) {
        if (!styles)
            return component
        const StyledComponent = styled(component)(styles)
        return StyledComponent
    }
}