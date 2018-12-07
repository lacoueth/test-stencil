import { Component, Prop } from "@stencil/core";
// import { format } from "../../utils/utils";

@Component({
  tag: "youtube-video",
  shadow: false,
  styles: `
  iframe {
    display: block;
  }
  `
})
export class YoutubeVideoComponent {
  /**
   * The content annotated
   */
  @Prop() id: string;

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
          src={this.getEmbedUrl()}
          frameborder="0"
        />
      </div>
    );
  }
}
