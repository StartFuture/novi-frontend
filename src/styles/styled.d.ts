import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme { 
        title: string;
        
        colors: {
            primaryColor: string;
            lightGreyColor: string;
        }

        fonts: {
            fontAudiowide: string;
            fontCursive: string;
            fontMontserrat: string;
        },
    } 
}