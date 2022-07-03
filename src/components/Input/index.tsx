import { ChangeEvent, useEffect, useRef, useState } from 'react';
import inputUtils from '../../utils/Input';
import * as S from './input.style';

interface Props {
  value: string;
  displayType: string;
  prefix: string;
  placeholder: string;
  separator: string;
  formatStyle?: string;
  customFormatStyle?: string;
  label?: string;
}

const defaultProps = {
  value: '',
  displayType: 'input',
  prefix: '',
  placeholder: '',
  separator: ' ',
};

const Input = ({
  value,
  displayType,
  prefix,
  placeholder,
  formatStyle,
  customFormatStyle,
  separator,
  label,
  ...props
}: Props) => {
  const [inputValue, setInputValue] = useState(prefix + value);
  const inputRef = useRef(null);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const prefixValue = e.target.value.substring(prefix.length);
    displayType === 'number' && prefixValue.replace(/[^\d]/g, '');

    if (formatStyle) {
      const formatValue =
        prefix + inputUtils.onFormatInput(formatStyle, prefixValue, separator);
      setInputValue(formatValue);

      return;
    }

    if (customFormatStyle) {
      const formatStyleWithSep = customFormatStyle.replace(/ /gi, separator);
      const formatValue =
        prefix + inputUtils.onFormatCustom(formatStyleWithSep, prefixValue);
      setInputValue(formatValue);

      return;
    }

    setInputValue(prefix + prefixValue);
  };

  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.RichInput
        {...props}
        value={inputValue}
        type={displayType}
        placeholder={placeholder}
        onChange={onHandleChange}
        ref={inputRef}
      />
    </>
  );
};

Input.defaultProps = defaultProps;

export default Input;
