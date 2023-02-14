import { after } from 'lodash';

export const selectInputStyles = {
  container: provided => ({
    ...provided,
    width: '100%',
  }),
  control: provided => ({
    ...provided,
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
    borderRadius: 0,
    width: '100%',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'none',
    },
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  valueContainer: provided => ({
    ...provided,
    height: 40,
    padding: 0,
    alignItems: 'center',
    textTransform: 'capitalize',
  }),
  input: provided => ({
    ...provided,
    marginBottom: '10px',
    display: 'block',
    height: 1,
    margin: 0,
  }),
  placeholder: provided => ({
    ...provided,
    position: 'relative',
    bottom: 10,
    color: '#bdbdbd',
    fontFamily: 'Circe, sans-serif',
    fontSize: 18,
    gridArea: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#000000',
    margin: 0,
    marginBottom: '-10px',
    fontSize: 16,
    paddingLeft: 10,
    lineHeight: 1,
    fontFamily: 'Circe, sans-serif',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#000000',
    '&:hover': {
      color: '#000000',
    },
  }),

  menu: provided => ({
    ...provided,
    background: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    overflow: 'hidden',
  }),

  menuList: provided => ({
    ...provided,
    background: 'transparent',
    borderRadius: 20,
    cursor: 'pointer',
    maxHeight: 280,
    '::-webkit-scrollbar': {
      width: '4px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#4a56e2;',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#4a56e2',
    },
  }),

  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    background: isFocused || isSelected ? '#ffffff' : 'transparent',
    color: isFocused || isSelected ? '#FF6596' : '#000000',
    cursor: 'pointer',
    padding: '14px 20px',
    fontSize: 16,
    lineHeight: 1,
    fontFamily: 'Circe, sans-serif',
    textTransform: 'capitalize',
  }),
};
