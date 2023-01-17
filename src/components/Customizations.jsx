import React from 'react'
import TextInput from './TextInput'
import Dropdown from './Dropdown'

export default function Customizations() {

  return (
    <div>
        <TextInput />
        <Dropdown
          name="Font Choices"
          choiceOne="Just Me Again Down Here"
          choiceTwo="La Belle Aurore"
          choiceThree="Permanent Marker"
        />
        <Dropdown
          name="Filter Choices"
          choiceOne="Vintage"
          choiceTwo="Black and White"
          choiceThree="Sepia"
        />
    </div>
  )
}
