// 'use client';

// import GlobalStyle from '../styles/GlobalStyle';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../styles/theme';
// import '@fortawesome/fontawesome-free/css/all.min.css';



// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider theme={theme}>
//           <GlobalStyle />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

'use client';

import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { StyledComponentsRegistry } from '../lib/styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}