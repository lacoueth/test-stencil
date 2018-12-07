import { Component, Prop, EventEmitter, Event } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "annotation-mark",
  shadow: false,
  styles: ``
})
export class AnnotationComponent {
  /**
   * The content annotated
   */
  @Prop() annotated: string;

  /**
   * The content of the annotation
   */
  @Prop() annotation: string;

  @Event() onOpenAnnotation: EventEmitter;

  openAnnotation() {
    this.onOpenAnnotation.emit({
      text: this.annotated,
      content: this.annotation
    });
  }

  render() {
    return (
      <span
        onClick={() => this.openAnnotation()}
        innerHTML={this.annotated}
        class="annotated-text"
      />
    );
  }
}
