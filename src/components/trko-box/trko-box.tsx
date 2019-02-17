import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-box',
  shadow: false,
  styleUrl: 'trko-box.scss'
})
export class BoxComponent {
  /**
   * The class(es) to add to the container
   */
  @Prop() class: string = '';

  /**
   * Title of the box
   */
  @Prop() heading: string;

  @Prop() id: string;

  getClasses() {
    return `trko-box-container ${this.class || ''} ${
      this.heading && this.heading.endsWith('retenir') ? 'reminder' : ''
    }`;
  }

  render() {
    return (
      <div class={this.getClasses()} id={this.id}>
        {this.heading ? <h5>{this.heading}</h5> : ''}
        <div class="trko-box-content">
          <slot />
        </div>
      </div>
    );
  }
}
