const onFormatDate = (value: string, separator: string) => {
  const unFormatValue = value.replace(/[^\d]/g, '');
  const valueLen = unFormatValue.length;
  const sep = separator !== ' ' ? separator : '/';

  const year = unFormatValue.slice(0, 4);
  if (valueLen < 5) return year;

  const month = validateMonth(unFormatValue.slice(4, 6));
  if (valueLen < 7) return `${year}${sep}${month}`;

  const day = validateDay(month, unFormatValue.slice(6, 8));

  return `${year}${sep}${month}${sep}${day}`;
};

const validateMonth = (splitValue: string) => {
  if (splitValue.length === 1)
    return (parseInt(splitValue) > 1 ? '0' : '') + splitValue;

  if (parseInt(splitValue) > 12) return '12';

  return splitValue;
};

const validateDay = (month: string, day: string) => {
  const validateFeb = month !== '02' ? 30 : 29;
  const maxDay = parseInt(month) % 2 !== 0 ? 31 : validateFeb;

  if (day.length === 1) return (parseInt(day) > 4 ? '0' : '') + day;
  if (parseInt(day) > maxDay) return String(maxDay);

  return day;
};

export default onFormatDate;
