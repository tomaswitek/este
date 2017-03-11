// @flow
import React from 'react';
import { Box, Field } from '../../common/components';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

type LoanSliderProps = {
  label: string,
  marginRight?: number,
  flexGrow: ?number,
  maxLength: ?number,
  min: number,
  max: number,
  step: number,
  defaultValue: number,
  value?: number,
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
  onChange,
  value,
}: LoanSliderProps) => {

  const onFieldChange = (e) => {
    const value = e.target.value || 0;
    onChange(Number.parseInt(value, 0));
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
        value={value}
        onChange={onFieldChange}
      />
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default LoanSlider;
