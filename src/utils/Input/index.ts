import onFormatTime from './onFormatTime';
import onFormatPhone from './onFormatPhone';
import onFormatDate from './onFormatDate';
import onFormatNumerical from './onFormatNumerical';
import onFormatCustom from './onFormatCustom';

const onFormatInput = (
  formatStyle: string,
  value: string,
  separator: string
) => {
  switch (formatStyle) {
    case 'phone':
      return onFormatPhone(value, separator);
    case 'date':
      return onFormatDate(value, separator);
    case 'time':
      return onFormatTime(value, separator);
    case 'numerical':
      return onFormatNumerical(value, separator);
    default:
      return value;
  }
};

export default { onFormatInput, onFormatCustom };
