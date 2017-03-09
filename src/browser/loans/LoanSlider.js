// @flow
import React from 'react';
import { Box, Field } from '../../common/components';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

type LoanSliderProps = {
  label: string,
  marginRight?: number,
  flexGrow?: number,
  maxLength?: number,
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  value: number,
};

const LoanSlider = ({
  flexGrow = 1,
  marginRight,
  label,
  maxLength = 10,
  min,
  max,
  step,
  defaultValue,
}: LoanSliderProps) => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <Box
      flexGrow={flexGrow}
      marginRight={marginRight}
    >
      <Field
        label={label}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={e => onChange(e.target.value)}
      />
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </Box>
  );
};

export default LoanSlider;
