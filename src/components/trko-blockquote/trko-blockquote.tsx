import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'trko-blockquote'
})
export class TrkoBlockquoteComponent {
  /**
   * Author
   */
  @Prop() author: string;

  /**
   * Link to the source
   */
  @Prop() link: string = '';

  /**
   * Additional classes
   */
  @Prop() class: string = '';

  /**
   * Text alignment 'left' | 'center' | 'right'
   */
  @Prop() alignment: string;

  getALignment() {
    return {
      'text-align': this.alignment
    };
  }

  getClasses() {
    return `trko-blockquote-container ${this.class || ''}`;
  }

  render() {
    return (
      <div class={this.getClasses()} style={this.getALignment()}>
        <blockquote class="trko-blockquote">
          <slot />
        </blockquote>
        <div class="trko-blockquote-author">{this.author}</div>
      </div>
    );
  }
}
