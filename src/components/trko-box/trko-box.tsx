import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-box',
  shadow: false,
  styles: `
  `
})
export class BoxComponent {
  /**
   * The class(es) to add to the container
   */
  @Prop() class: string = '';

  /**
   * Title of the box
   */
  @Prop() heading: string = 'Note';

  @Prop() id: string;

  getClasses() {
    return `trko-box-container ${this.class}`;
  }

  render() {
    return (
      <div class={this.getClasses()} id={this.id}>
        <h5>{this.heading}</h5>
        <div class="trko-box-content">
          <slot />
        </div>
      </div>
    );
  }
}
