const onFormatPhone = (value: string, separator: string) => {
  const unFormatValue = value.replace(/[^\d]/g, '');
  const valueLen = unFormatValue.length;
  const sep = separator !== ' ' ? separator : '-';

  const firstPart = unFormatValue.slice(0, 3);
  if (valueLen < 4) return firstPart;

  const secondPart = unFormatValue.slice(3, 7);
  if (valueLen < 8) return `${firstPart}${sep}${unFormatValue.slice(3)}`;

  const lastPart = unFormatValue.slice(7, 11);

  return `${firstPart}${sep}${secondPart}${sep}${lastPart}`;
};

export default onFormatPhone;
