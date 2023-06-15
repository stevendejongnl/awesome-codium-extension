import {html, LitElement} from 'lit'
import {classMap} from 'lit/directives/class-map.js'
import {customElement, property} from 'lit/decorators.js'

import {hostStyle} from '../_styles/default.js'
import {style} from './{{name}}.style.js'

@customElement('csc-{{name}}')
export class CSC{{namePascalCase}} extends LitElement {
  static override styles = [hostStyle, style]

  override render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'cse-{{name}}': true,
        })}
      ></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'csc-{{name}}': CSC{{namePascalCase}}
  }
}
