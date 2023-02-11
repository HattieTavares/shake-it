import React from 'react'
import TextInput from './TextInput'
import FilterDropdown from './FilterDropdown'
import FontDropdown from './FontDropdown'

export default function Customizations() {

  return (
    <div>
        <TextInput />
        <FontDropdown />
        <FilterDropdown />
    </div>
  )
}
