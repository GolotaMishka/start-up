import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import parseISO from 'date-fns/parseISO';
import { DateUtils } from 'react-day-picker';
import { Icon } from 'ui';
import { TextInput } from '../text';

type DatePickerState = {
  isOpen: boolean;
  date: Date | string | undefined;
};

type DatePickerStateProps = {
  value?: any;
  error?: string;
  setFieldValue: (name: string, value: string) => void;
  onBlur: () => void;
  name: string;
};

class DatePicker extends React.Component<DatePickerStateProps, DatePickerState> {
  static defaultProps = {
    value: undefined,
    error: null,
  };

  constructor(props: DatePickerStateProps) {
    super(props);
    this.state = {
      isOpen: false,
      date: props.value instanceof Date || !props.value ? props.value : parseISO(props.value),
    };
  }

  handleOpenToPicker = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  };

  formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale });
  };

  handleToDayClick = (day) => {
    const { setFieldValue, name } = this.props;
    setFieldValue(name, day);
  };

  renderTextInput = (componentProps) => {
    return <TextInput iconAfter={Icon.icons.calendar} {...this.props} {...componentProps} />;
  };

  render() {
    const { date } = this.state;
    const FORMAT = 'dd/MM/yyyy';
    return (
      <DayPickerInput
        {...this.props}
        onDayChange={this.handleToDayClick}
        component={this.renderTextInput}
        formatDate={this.formatDate}
        format={FORMAT}
        parseDate={this.parseDate}
        value={date}
      />
    );
  }
}
export { DatePicker };
