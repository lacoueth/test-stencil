import { Component, Prop } from '@stencil/core';

import { ra2ta, ta2pa, rt2ra, pa2rh } from 'treekoditor';

@Component({
  tag: 'document-printer',
  styleUrl: 'document-printer.css',
  shadow: false
})
export class DocumentPrinterComponent {
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
    return <section innerHTML={this.getInner()} />;
  }
}
