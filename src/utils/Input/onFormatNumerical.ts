const onFormatNumerical = (value: string, separator: string) => {
  const unFormatValue = value.replace(/[^\d]/g, '');
  const sep = separator !== ' ' ? `$1${separator}` : '$1,';

  return unFormatValue.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, sep);
};

export default onFormatNumerical;
