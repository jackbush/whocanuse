import React from 'react'
import { BackgroundWrapper, Hash, HexWrapper } from './styled'

export const Background = ({
  background,
  getBackgroundTextColor,
  backgroundText,
  setBackground,
  onClick,
}) => {
  return (
    <BackgroundWrapper
      background={background}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClick()
        }
      }}
    >
      <Hash textColour={getBackgroundTextColor}>#</Hash>
      <HexWrapper
        type="text"
        name="background"
        textColour={getBackgroundTextColor}
        value={backgroundText}
        onKeyPress={e => {
          if (e.key.match(/[^0-9a-fA-F]/)) {
            e.preventDefault()
          }
        }}
        onChange={e => {
          setBackground(e.target.value)
        }}
      />
    </BackgroundWrapper>
  )
}
