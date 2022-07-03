const onFormatCustom = (customStyle: string, value: string) => {
  let unFormatValue = value;
  customStyle
    .split('#')
    .filter((str) => str !== '')
    .forEach((sep) => (unFormatValue = unFormatValue.replace(sep, '')));

  const customStyleArr = customStyle.split('');
  const unFormatLen = unFormatValue.length;
  let valueCount = 0;
  let sliceCount = 0;

  for (let i = 0; i < customStyleArr.length; i += 1) {
    if (valueCount === unFormatLen) break;
    sliceCount += 1;

    if (customStyleArr[i] === '#') {
      customStyleArr[i] = unFormatValue[valueCount];
      valueCount += 1;
    }
  }

  return customStyleArr.slice(0, sliceCount).join('') || '';
};

export default onFormatCustom;
