import { Component, Prop, Element, State } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'youtube-video',
  shadow: false,
  styles: `
  iframe {
    display: block;
  }
  `
})
export class YoutubeVideoComponent {
  /**
   * The video id
   */
  @Prop() id: string;

  @Prop() src: string;

  @State() realSrc: string;

  @Element() el: HTMLElement;

  io: IntersectionObserver;

  componentDidLoad() {
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any[]) => {
        if (data[0].isIntersecting) {
          this.handleIframe();
          this.cleanup();
        }
      });

      this.io.observe(this.el.querySelector('iframe'));
    } else {
      this.handleIframe();
    }
  }

  componentDidUnload() {
    this.cleanup();
  }

  handleIframe() {
    this.realSrc = this.getEmbedUrl();
  }

  cleanup() {
    // always make sure we remove the intersection
    // observer when its served its purpose so we dont
    // eat cpu cycles unnecessarily
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  getEmbedUrl() {
    return `http://www.youtube.com/embed/${this.id}`;
  }

  render() {
    return (
      <div class="youtube-video-container">
        <iframe
          id="ytplayer"
          width="100%"
          height="250px"
          src={this.realSrc}
          frameborder="0"
        />
      </div>
    );
  }
}
