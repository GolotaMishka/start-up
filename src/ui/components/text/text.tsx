import React from 'react';
import cx from 'classnames';
import weights from 'ui/styles/_weights.scss';
import sizes from 'ui/styles/_sizes.scss';
import colors from 'ui/styles/_colors.scss';
import fonts from 'ui/styles/_fonts.scss';

import s from './styles.scss';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'text' | 'primary';
  weight?: any;
  size?: any;
  font?: any;
  component?: 'span' | 'p';
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<TextProps> {
  colors: any;
  sizes: any;
  weights: any;
  fonts: any;
}

export const Text = React.forwardRef<any, TextProps>(
  (
    {
      color = Text.colors.text,
      size = Text.colors.m,
      weight = 'inherit',
      font = Text.fonts.primaryfont,
      className,
      component = 'span',
      ...props
    }: TextProps,
    ref,
  ): JSX.Element => {
    return React.createElement(component, {
      className: cx(s.text, color, size, weight, font, className),
      ref,
      ...props,
    });
  },
) as CompoundedComponent;

Text.colors = Object.entries(colors).reduce((obj, [colorName]) => {
  // eslint-disable-next-line
  obj[colorName] = s[`textColor__${colorName}`];
  return obj;
}, {});

Text.sizes = Object.entries(sizes).reduce((obj, [sizeName]) => {
  // eslint-disable-next-line
  obj[sizeName] = s[`textSize__${sizeName}`];
  return obj;
}, {});

Text.weights = Object.entries(weights).reduce((obj, [weightName]) => {
  // eslint-disable-next-line
  obj[weightName] = s[`textWeight__${weightName}`];
  return obj;
}, {});

Text.fonts = Object.entries(fonts).reduce((obj, [fontName]) => {
  // eslint-disable-next-line
  obj[fontName] = s[`textFont__${fontName}`];
  return obj;
}, {});
