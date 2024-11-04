"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
    }

    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex-grow: 1;
    }
    
`

export default GlobalStyle