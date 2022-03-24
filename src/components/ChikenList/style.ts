import { StylesConfig } from "react-select";
import { SortOptionType } from "./sortOption";

const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });
  
  const colourStyles: StylesConfig<SortOptionType> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   const color = 'transparent';
    //   return {
    //     ...styles,
    //     backgroundColor: isDisabled
    //       ? undefined
    //       : isSelected
    //       ? 'transparent'
    //       : isFocused
    //       ? color
    //       : undefined,
    //     color: isDisabled
    //       ? '#ccc'
    //       : isSelected
    //       ? 1 > 2
    //         ? 'white'
    //         : 'white'
    //       : 'white',
    //     cursor: isDisabled ? 'not-allowed' : 'default',
  
    //     ':active': {
    //       ...styles[':active'],
    //       backgroundColor: !isDisabled
    //         ? isSelected
    //           ? 'transparent'
    //           : color
    //         : undefined,
    //     },
    //   };
    // },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot('transparent') }),
  };

  export default colourStyles;