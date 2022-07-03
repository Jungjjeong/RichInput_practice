import { Input } from '..';

export default {
  title: 'Component/Input',
  component: Input,
};

export const Default = () => {
  return <Input placeholder="placeholderTest" />;
};

export const PrefixInput = () => {
  return (
    <>
      <Input label="Using Prefix" prefix="PREFIX-" />
      <Input
        label="Using Prefix + format Phone Style"
        prefix="+82"
        formatStyle="phone"
      />
      <Input
        label="Using Prefix + Custom Style"
        prefix="+82"
        customFormatStyle="(###) ####-####"
      />
    </>
  );
};

export const formatPhoneInput = () => {
  return (
    <>
      <Input
        label="Phone number formatting"
        placeholder="010-XXXX-XXXX"
        formatStyle="phone"
      />
      <Input
        label="Phone number formatting with separator"
        placeholder="010?XXXX?XXXX"
        separator="?"
        formatStyle="phone"
      />
    </>
  );
};

export const formatDateInput = () => {
  return (
    <>
      <Input
        label="Date formatting"
        placeholder="YYYY/MM/DD"
        formatStyle="date"
      />
      <Input
        label="Date formatting with separator"
        placeholder="YYYY?MM?DD"
        formatStyle="date"
        separator="?"
      />
    </>
  );
};

export const formatTimeInput = () => {
  return (
    <>
      <Input
        label="Time formatting"
        placeholder="HH:MM:SS"
        formatStyle="time"
      />
      <Input
        label="Time formatting with separator"
        placeholder="HH?MM?SS"
        separator="?"
        formatStyle="time"
      />
    </>
  );
};

export const formatNumericalInput = () => {
  return (
    <>
      <Input
        label="Numerical(Thousand) formatting"
        placeholder="10,000,000"
        formatStyle="numerical"
      />
      <Input
        label="Numerical(Thousand) formatting with separator"
        placeholder="10?000?000"
        separator="?"
        formatStyle="numerical"
      />
    </>
  );
};

export const CustomFormatInput = () => {
  return (
    <>
      <Input
        label="Custom formatting(1)"
        customFormatStyle="#### #### #### ####"
        placeholder="#### #### #### ####"
      />
      <Input
        label="Custom formatting(2)"
        customFormatStyle="(###) ####-####"
        placeholder="(###) ####-####"
      />
      <Input
        label="Custom formatting with Separator"
        separator="-"
        customFormatStyle="#### #### #### ####"
        placeholder="####-####-####-####"
      />
    </>
  );
};
