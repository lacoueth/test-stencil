import { Component, Prop, EventEmitter, Event } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-annotation',
  shadow: false,
  styleUrl: 'trko-annotation.scss'
})
export class TrkoAnnotationComponent {
  /**
   * The content annotated
   */
  @Prop() annotated: string;

  @Prop({ mutable: true }) annotatedText: string = '';

  /**
   * The content of the annotation
   */
  @Prop() annotation: string;

  @Event() annotationClick: EventEmitter;

  @Prop({ mutable: true }) styleExt: { [key: string]: string } = {};

  componentDidLoad() {
    const regex = /(([0-9]*(\.[0-9])?):){3}([0-9]*(\.[0-9])?)/;
    if (this.annotated.match(regex)) {
      console.log('regex found');
      // xOffset:yOffset:length:height
      const params = this.annotated.split(':');
      console.log(params);
      this.styleExt = {
        position: 'absolute',
        left: params[0] + '%',
        top: params[1] + '%',
        width: params[2] + '%',
        height: params[3] + '%'
      };
    } else {
      this.annotatedText = this.annotated;
    }
  }

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
        innerHTML={this.annotatedText}
        class="trko-annotated-text"
        style={this.styleExt}
      />
    );
  }
}
