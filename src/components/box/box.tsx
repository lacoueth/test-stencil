import { Component, Prop } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "content-box",
  shadow: false,
  styles: `
  `
})
export class BoxComponent {
  /**
   * The content annotated
   */
  @Prop() classes: string = "note";
  @Prop() heading: string = "Note";

  getClasses() {
    return `content-box ${this.classes}`;
  }

  render() {
    return (
      <div class={this.getClasses()}>
        <h5>{this.heading}</h5>
        <slot />
      </div>
    );
  }
}
