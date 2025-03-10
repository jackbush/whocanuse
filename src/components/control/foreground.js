import React from 'react'
import { ForegroundWrapper, Hash, HexWrapper } from './styled'

export const Foreground = ({
  color,
  getForegroundTextColor,
  colorText,
  setForeground,
  onClick,
}) => {
  return (
    <ForegroundWrapper
      color={color}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClick()
        }
      }}
    >
      <Hash textColour={getForegroundTextColor}>#</Hash>
      <HexWrapper
        type="text"
        name="foreground"
        textColour={getForegroundTextColor}
        value={colorText}
        onKeyPress={e => {
          if (e.key.match(/[^0-9a-fA-F]/)) {
            e.preventDefault()
          }
        }}
        onChange={e => {
          setForeground(e.target.value)
        }}
      />
    </ForegroundWrapper>
  )
}
