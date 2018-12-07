import { Component, Prop } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "hide-show",
  shadow: false,
  styles: `
  `
})
export class HideShowComponent {
  /**
   * The content annotated
   */
  @Prop() classes: string = "note";
  @Prop() heading: string = "Note";

  @Prop({ mutable: true }) isHidden: boolean;

  getClasses() {
    return `content-box ${this.classes}`;
  }

  render() {
    return (
      <div class="hide-block">
        <div class="head">
          <h5>{this.heading}</h5>
          <button onClick={() => (this.isHidden = !this.isHidden)}>
            {this.isHidden ? "Afficher" : "Masquer"}
          </button>
        </div>

        <div class={(this.isHidden ? "closed" : "opened") + " hide-section"}>
          <slot />
        </div>
      </div>
    );
  }
}
