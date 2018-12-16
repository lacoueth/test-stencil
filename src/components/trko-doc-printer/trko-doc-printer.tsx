import { Component, Prop } from '@stencil/core';

import { ra2ta, ta2pa, rt2ra, pa2rh } from 'treekoditor';

/* import * as trko from 'treekoditor/lib-esm';
// import {pa2rh} from 'treekoditor';

const ra2ta = trko.ra2ta;
const rt2ra = trko.rt2ra;
const ta2pa = trko.ta2pa;
const pa2rh = trko.pa2rh; */

@Component({
  tag: 'trko-doc-printer',
  styleUrl: 'document-printer.css',
  shadow: false
})
export class TrkoDocPrinterComponent {
  /**
   * The Markdown-Katex-HTML raw text input
   */
  @Prop() mdHtmlContent: string;

  private getInner(): string {
    const result = pa2rh(ta2pa(ra2ta(rt2ra(this.mdHtmlContent))));
    console.log(result);
    return result;
  }

  render() {
    return <section class="trko-doc-section" innerHTML={this.getInner()} />;
  }
}
