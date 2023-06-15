import { html } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import './{{name}}'

const meta: Meta = {
  title: 'Elements/UndefinedGroup Elements/{{namePascalCase}}',
  component: 'cse-{{name}}',
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
      <cse-{{name}}></cse-{{name}}>
    `
  },
}
