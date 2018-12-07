import { Component, Prop } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "single-image",
  shadow: false,
  styles: `
  `
})
export class SingleImageComponent {
  /**
   * The content annotated
   */
  @Prop() url: string;

  @Prop() description: string;
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
