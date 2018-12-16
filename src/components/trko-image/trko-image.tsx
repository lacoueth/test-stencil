import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-image',
  shadow: false,
  styles: `
  `
})
export class TrkoImageComponent {
  /**
   * The content annotated
   */
  @Prop() url: string;

  /**
   * Description of the image
   */
  @Prop() description: string;

  /**
   * Title of the image
   */
  @Prop() title: string;

  render() {
    return (
      <figure>
        <img src={this.url} alt={this.description} title={this.title} />
        <figcaption>{this.title}</figcaption>
      </figure>
    );
  }
}
