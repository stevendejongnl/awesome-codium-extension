import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import './{{name}}'

const meta: Meta = {
  title: 'Components/UndefinedGroup Components/{{namePascalCase}}',
  component: 'cs-{{name}}',
  argTypes: {},
  parameters: {
    status: {
      type: 'alpha'
    },
    cssprops: {},
    design: {}
  }
}

export default meta
type Story = StoryObj

export const {{namePascalCase}}: Story = {
  render: () => {
    return html`
      <cs-{{name}}></cs-{{name}}>
    `
  },
}
