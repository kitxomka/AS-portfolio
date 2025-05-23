'use client';

import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background: #222;
  color: white;
  text-align: center;
`;

export default function Footer() {
    return <FooterWrapper>© {new Date().getFullYear()} Alona Shot. All rights reserved. Built with ❤️ and lots of ☕</FooterWrapper>;
}
