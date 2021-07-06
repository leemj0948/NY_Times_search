import { css } from 'styled-components';

export const flexSet = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

const Theme = {
  primaryColor: '#D5A770',
  gray: `rgba(229, 231, 235)`,
  blue: `rgba(59, 130, 246)`,
  skyBlue: `rgba(96, 165, 250)`,
  bgColor: '#F8F8F8',
  flexSet,
};

export default Theme;
