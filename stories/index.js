import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'

import {
  BasicSelect,
  BasicMultiSelect,
  BasicSearchSelect,
  SimpleSelectWithStringValue,
  MultiSelectWithStringValues
} from './components'
import states from './fixtures/states'

import '../scss/crane.scss'

const stories = storiesOf('Select', module)

stories.addDecorator(withKnobs)

stories.add('with SimpleSelect', () => (
  <BasicSelect
    options={states}
    labelKey="name"
    valueKey="abbreviation"
    showInput={boolean('Show Input', false)}
    isOpen={boolean('Is Open', false)}
    autoCloseMenu={boolean('Auto Close Menu', true)}
    clearable={boolean('Clearable', false)}
    clearInputOnBlur={boolean('Clear Input on Blur', true)}
    clearInputOnSelect={boolean('Clear Input on Select', true)}
    placeholder={text('Placeholder', 'Select value...')}
    openOnClick={boolean('Open On Click', true)}
    openOnEmptyInput={boolean('Open On Empty Input', true)}
  />
))

stories.add('with SimpleSelect and string value', () => (
  <SimpleSelectWithStringValue
    options={states}
    labelKey="name"
    valueKey="abbreviation"
    showInput={boolean('Show Input', false)}
    isOpen={boolean('Is Open', false)}
    autoCloseMenu={boolean('Auto Close Menu', true)}
    clearable={boolean('Clearable', false)}
    clearInputOnBlur={boolean('Clear Input on Blur', true)}
    clearInputOnSelect={boolean('Clear Input on Select', true)}
    placeholder={text('Placeholder', 'Select value...')}
    openOnClick={boolean('Open On Click', true)}
    openOnEmptyInput={boolean('Open On Empty Input', true)}
  />
))

stories.add('with MultiSelect', () => (
  <BasicMultiSelect
    options={states}
    labelKey="name"
    valueKey="abbreviation"
    isOpen={boolean('Is Open', false)}
    valueLabelLimit={number('Value Label Limit', 3)}
    autoCloseMenu={boolean('Auto Close Menu', false)}
    clearable={boolean('Clearable', false)}
    placeholder={text('Placeholder', 'Select value...')}
    openOnClick={boolean('Open On Click', true)}
  />
))

stories.add('with MultiSelect and string values', () => (
  <MultiSelectWithStringValues
    options={states}
    labelKey="name"
    valueKey="abbreviation"
    isOpen={boolean('Is Open', false)}
    valueLabelLimit={number('Value Label Limit', 3)}
    autoCloseMenu={boolean('Auto Close Menu', false)}
    clearable={boolean('Clearable', false)}
    placeholder={text('Placeholder', 'Select value...')}
    openOnClick={boolean('Open On Click', true)}
  />
))

stories.add('with SearchSelect', () => (
  <BasicSearchSelect
    options={states}
    labelKey="name"
    valueKey="abbreviation"
    isOpen={boolean('Is Open', false)}
    autoCloseMenu={boolean('Auto Close Menu', true)}
    clearable={boolean('Clearable', false)}
    placeholder={text('Placeholder', 'Select value...')}
    openOnClick={boolean('Open On Click', true)}
    openOnEmptyInput={boolean('Open On Empty Input', true)}
  />
))
