import { Component, Prop } from '@stencil/core';
import { ra2ta, ta2pa, rt2ra, pa2rh } from 'treekoditor';

@Component({
  tag: 'trko-doc-printer',
  styleUrl: 'document-printer.css',
  shadow: false
})
export class TrkoDocPrinterComponent {
  /**
   * The Markdown-Katex-HTML raw text input
   */
  @Prop() mdHtmlContent: string = '';

  // @Element() el: HTMLElement;

  private getInner(): string {
    return pa2rh(ta2pa(ra2ta(rt2ra(this.mdHtmlContent))));
  }

  render() {
    return <section class="trko-doc-section" innerHTML={this.getInner()} />;
  }
}
