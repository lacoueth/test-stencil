import { Component, Prop, EventEmitter, Event } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "trko-annotation",
  shadow: false,
  styles: ``
})
export class TrkoAnnotationComponent {
  /**
   * The content annotated
   */
  @Prop() annotated: string;

  /**
   * The content of the annotation
   */
  @Prop() annotation: string;

  @Event() annotationClick: EventEmitter;

  openAnnotation() {
    this.annotationClick.emit({
      annotated: this.annotated,
      annotation: this.annotation
    });
  }

  render() {
    return (
      <span
        onClick={() => this.openAnnotation()}
        innerHTML={this.annotated}
        class="trko-annotated-text"
      />
    );
  }
}
