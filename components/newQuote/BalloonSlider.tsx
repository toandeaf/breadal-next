import { FC, useState } from 'react'
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from '@chakra-ui/react'

export const BalloonSlider: FC = () => {
  const [sliderValue, setSliderValue] = useState(5)
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <Slider
      defaultValue={sliderValue}
      min={0}
      max={20}
      colorScheme="teal"
      onChange={(v: number) => {
        setSliderValue(v)
        setShowTooltip(true)
      }}
      onChangeEnd={() => setShowTooltip(false)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}%`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  )
}

export default BalloonSlider
