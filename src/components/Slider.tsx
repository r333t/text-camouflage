import React from "react";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";

interface ComplexitySliderProps {
  complexity: number;
  set_complexity: any;
}

const ComplexitySlider: React.FC<ComplexitySliderProps> = ({
  complexity,
  set_complexity,
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Slider
      mt="3"
      id="slider"
      defaultValue={complexity}
      min={0}
      max={100}
      colorScheme="blue"
      onChange={(v) => set_complexity(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
        25%
      </SliderMark>
      <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
        50%
      </SliderMark>
      <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        colorScheme="blue"
        placement="top"
        isOpen={showTooltip}
        label={`${complexity}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export default ComplexitySlider;
