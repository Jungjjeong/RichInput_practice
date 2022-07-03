const onFormatTime = (value: string, separator: string) => {
  const unFormatValue = value.replace(/[^\d]/g, '');
  const sep = separator !== ' ' ? separator : ':';
  const valueLen = unFormatValue.length;

  const hour = validateHour(unFormatValue.slice(0, 2), valueLen);
  if (valueLen < 3) return hour;

  const minute = validateTime(unFormatValue.slice(2, 4));
  if (valueLen < 5) return `${hour}${sep}${minute}`;

  const second = validateTime(unFormatValue.slice(4, 6));

  return `${hour}${sep}${minute}${sep}${second}`;
};

const validateHour = (hour: string, len: number) => {
  const intHour = parseInt(hour);

  if (len === 1 && intHour > 2) return '0' + hour;
  if (intHour > 23) return '23';

  return hour;
};

const validateTime = (splitTime: string) => {
  if (splitTime.length !== 1) return splitTime;

  return (parseInt(splitTime) > 5 ? '0' : '') + splitTime;
};

export default onFormatTime;
