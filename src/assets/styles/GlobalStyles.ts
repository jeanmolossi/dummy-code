import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --red-100: #FF464F;
    --red-200: #FF575F;
    --red-300: #623A42;
    --orange-100: #FF8A34;
    --orange-200: #FF974A;
    --orange-300: #624D3B;
    --yellow-100: #FFBC25;
    --yellow-200: #FFC542;
    --yellow-300: #625B39;
    --green-100: #25C685;
    --green-200: #3DD598;
    --green-300: #286053;
    --blue-100: #005DF2;
    --blue-200: #0062FF;
    --blue-300: #163E72;
    --purple-100: #6952DC;
    --purple-200: #755FE2;
    --purple-300: #393D69;
    --grey-100: #96A7AF;
    --grey-200: #475E69;
    --grey-300: #30444E;
    --dark-100: linear-gradient(138.13deg, #2A3C44 25.75%, #23343C 100%);
    --dark-200: #2A3C44;
    --dark-300: linear-gradient(138.13deg, #22343C 25.87%, #1F2E35 100%);
    --dark-background: #191A1D;

    --spacing-xs: 0.4rem;
    --spacing-sm: 0.8rem;
    --spacing-md: 1.6rem;
    --spacing-lg: 2.4rem;
    --spacing-xl: 3.2rem;
    --spacing-xxl: 4.0rem;
    --spacing-xl1: 4.8rem;

    --padding-xs: 0.4rem;
    --padding-sm: 0.8rem;
    --padding-md: 1.6rem;
    --padding-lg: 2.4rem;
    --padding-xl: 3.2rem;
    --padding-xxl: 4.0rem;
    --padding-xl1: 4.8rem;

    --radii-xs: 0.4rem;
    --radii-sm: 0.8rem;
    --radii-md: 1.6rem;
    --radii-lg: 2.4rem;
    --radii-xl: 3.2rem;
    --radii-xxl: 4.0rem;
    --radii-xl1: 4.8rem;
    --radii-full: 50%;

    --breakpoint-mobile: 37.5rem;
    --breakpoint-tablet: 76.8rem;
    --breakpoint-desktop: 115.2rem;

    --current-breakpoint: var(--breakpoint-desktop);
    @media (max-width: 76.8rem) {
    --current-breakpoint: var(--breakpoint-tablet);
    }
    @media (max-width: 37.5rem) {
    --current-breakpoint: var(--breakpoint-mobile);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font: 400 14px 'Ubuntu', Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    color: #FFFFFF;
  }

  input, button {
    font: 400 14px 'Ubuntu', Arial, Helvetica, sans-serif;
    outline: none;
  }

  label, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
