import React, {
  FC, HTMLProps,
} from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { TextInputWrap } from '../TextInputWrap';

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  left?: JSX.Element | string;
  right?: JSX.Element | string;
  error?: boolean;
  hasError?: boolean;
  containerClassName?: string;
}

const IconRenderer: FC<{ error?: boolean }> = ({ children, error }) =>
  (children ? (
    <div
      className={classNames(styles.icon, {
        [styles.text]: typeof children === 'string',
        [styles.error]: error,
      })}
    >
      {children}
    </div>
  ) : null);

const TextInput: FC<TextInputProps> = ({
  type = 'text',
  left,
  right,
  hasError,
  containerClassName,
  className,
  ...props
}) => (
  <TextInputWrap error={hasError} className={containerClassName}>
    <IconRenderer error={hasError}>{left}</IconRenderer>

    <input
      type={type}
      {...props}
      className={classNames(styles.input, className)}
      size={1}
    />

    <IconRenderer>{right}</IconRenderer>

  </TextInputWrap>
);

export { TextInput };