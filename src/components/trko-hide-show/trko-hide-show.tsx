import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-hide-show',
  shadow: false,
  styles: `
  `
})
export class TrkoHideShowComponent {
  /**
   * The title of the hidden block
   */
  @Prop() heading: string = 'Details';

  /**
   * Initial opening state of the block
   */
  @Prop({ mutable: true }) hidden: boolean;

  render() {
    return (
      <div class="trko-hide-show-container">
        <div class="trko-hide-show-head">
          <h5>{this.heading}</h5>
          <button onClick={() => (this.hidden = !this.hidden)}>
            {this.hidden ? 'Afficher' : 'Masquer'}
          </button>
        </div>

        <div
          class={(this.hidden ? 'closed' : 'opened') + ' trko-hidden-section'}
        >
          <slot />
        </div>
      </div>
    );
  }
}
