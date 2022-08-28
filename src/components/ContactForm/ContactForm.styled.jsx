import styled from 'styled-components';

export const FormButton = styled.button`
  cursor: pointer;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
`;
