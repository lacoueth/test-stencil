import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-image',
  shadow: false,
  styleUrl: 'trko-figure.scss'
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
        <div class="trko-image-wrapper">
          <img src={this.url} alt={this.description} title={this.title} />
          <slot />
        </div>
        <figcaption>{this.title}</figcaption>
        <a class="trko-image-zoom-btn" href={this.url}>
          Agrandir
        </a>
      </figure>
    );
  }
}
