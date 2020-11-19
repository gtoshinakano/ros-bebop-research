import { css } from 'styled-components';

const breaks = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '2000px'
};

const customMediaQuery = (minWidth: string, maxWidth: string) =>
  `@media only screen and (min-width: ${minWidth}) and (max-width: ${maxWidth})`;

export const breakpoint = {
  xs: customMediaQuery("0",breaks.xs),
  sm: customMediaQuery(breaks.xs, breaks.sm),
  md: customMediaQuery(breaks.sm, breaks.md),
  lg: customMediaQuery(breaks.md, breaks.lg),
  xl: customMediaQuery(breaks.lg, breaks.xl),
};

