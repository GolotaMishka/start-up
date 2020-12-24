import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import cx from 'classnames';
import { Icon } from 'ui/components/icon';
import { Text } from 'ui/components/text';
import s from './styles.scss';

const customStyles = {
  container: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '2px',
    flexWrap: 'nowrap',
    fontSize: '14px',
    fontFamily: 'arial',
    maxHeight: '40px',
    minHeight: '40px',
    width: '100%',
    background: 'white',
    cursor: 'pointer',
    ':hover': {
      background: 'white',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#ccc',
    fontSize: '14px',
    fontFamily: 'arial',
  }),
  valueContainer: (provided) => ({
    ...provided,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '2px',
    borderTop: 'none',
    marginTop: '2px',
    width: '100%',
    zIndex: '50',
    backgroundColor: 'white',
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    color: '#2d2d2d',
    cursor: 'pointer',
    fontFamily: 'arial',
    fontSize: '16px',
    ':hover': {
      backgroundColor: '#e3e3e3',
    },
    textAlign: 'left',
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
  }),
};
/* eslint-disable */
const customDropDownIndicator = ({ selectProps, ...props }) => {
  return (
    <components.DropdownIndicator selectProps={selectProps} {...props}>
      <div className={cx(s.dropDown)}>
        <Icon icon={Icon.icons.chevronDown} className={cx(s.dropDown, selectProps.menuIsOpen && s.dropDownOpen)} />
      </div>
    </components.DropdownIndicator>
  );
};
/* eslint-enable */

customDropDownIndicator.propTypes = {
  selectProps: PropTypes.objectOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })),
};

customDropDownIndicator.defaultProps = {
  selectProps: null,
};

interface OptionType {
  value: string;
  label: string;
}

export interface SelectInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  className?: string;
  error?: string;
  options: Array<OptionType>;
  title?: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({
  className,
  title,
  disabled,
  options,
  error,
  ...props
}: SelectInputProps) => {
  const errorStyles = {
    ...customStyles,
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #ff431f',
      borderRadius: '2px',
      boxShadow: state.isFocused ? 'transparent' : 'transparent',
      flexWrap: 'nowrap',
      fontSize: '16px',
      maxHeight: '32px',
      minHeight: '32px',
      ':hover': {
        border: '1px solid #ff431f',
      },
      paddingLeft: '10px',
      width: '100%',
    }),
  };

  return (
    <>
      {title && (
        <Text size={Text.sizes.l} className={s.title} color={Text.colors.text}>
          {title}
        </Text>
      )}
      <Select
        options={options}
        className={className}
        styles={error ? errorStyles : customStyles}
        isDisabled={disabled}
        isSearchable={false}
        components={{
          DropdownIndicator: customDropDownIndicator,
        }}
        {...props}
      />
    </>
  );
};
