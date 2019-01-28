import { Component, Prop } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-hide-show',
  shadow: false,
  styleUrl: 'trko-hide-show.scss'
})
export class TrkoHideShowComponent {
  /**
   * The title of the hidden block
   */
  @Prop() heading: string = 'Details';

  /**
   * Initial opening state of the block
   */
  @Prop({ mutable: true }) close: boolean;

  render() {
    return (
      <div class="trko-hide-show-container">
        <div
          class="trko-hide-show-head"
          onClick={() => (this.close = !this.close)}
        >
          <h5>{this.heading}</h5>
          <button>{this.close ? 'Développer' : 'Réduire'}</button>
        </div>

        <div
          class={(this.close ? 'closed' : 'opened') + ' trko-hidden-section'}
        >
          <slot />
        </div>
      </div>
    );
  }
}
