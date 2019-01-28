import { Component, Prop, Element } from '@stencil/core';
// import { format } from "../../utils/utils";

@Component({
  tag: 'trko-yt-light',
  shadow: false,
  styleUrl: 'trko-yt-light.scss'
})
export class YtLightComponent {
  /**
   * The YT video id
   */
  @Prop() 'video-id': string;

  /**
   * Description of the video
   */
  @Prop({ mutable: true }) description: string;

  @Prop({ mutable: true }) title: string = '...';

  @Prop({ mutable: true }) coverUrl: string;
  @Prop({ mutable: true }) mediumCoverUrl: any = { url: 'https://www.dickson-constant.com/medias/images/catalogue/api/m654-grey-680.jpg' };
  @Prop({ mutable: true }) channelTitle: string = '...';

  @Prop({ mutable: true }) clicked = false;

  @Element() el: HTMLElement;

  componentDidLoad() {
    console.log('compo did load');
    return fetch(
      'https://us-central1-nnnnseo.cloudfunctions.net/getYoutubeData?videoId=' +
        this['video-id']
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const obj = JSON.parse(data.body).items[0];

        console.log(obj);

        this.title = obj.snippet.title;
        this.description = obj.snippet.description;
        this.coverUrl = obj.snippet.thumbnails.standard.url;
        this.mediumCoverUrl = obj.snippet.thumbnails.medium;
        this.channelTitle = obj.snippet.channelTitle;
      });
  }

  getYtUrl() {
    return `https://www.youtube.com/watch?v=${this['video-id']}`;
  }

  getEmbedUrl() {
    return `https://www.youtube.com/embed/${
      this['video-id']
    }?autoplay=1&modestbranding=1&showinfo=0&start=0&rel=0`;
  }

  /* componentDidLoad() {
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
  } */

  render() {
    return (
      <figure
        class={
          'trko-yt-video-container ' + (this.clicked ? 'clicked' : 'unclicked')
        }
      >
        {!this.clicked ? (
          <div>
            <button onClick={() => (this.clicked = true)}>Lire</button>
            <img class="yt-video-thumbnail" src={this.mediumCoverUrl.url} />
          </div>
        ) : (
          <iframe
            id={'ytplayer' + this['video-id']}
            width="100%"
            height="250px"
            src={this.getEmbedUrl()}
            frameborder="0"
            allowFullScreen
          />
        )}
        <figcaption>
          <h5 class="yt-video-title">{this.title}</h5>
          <h5 class="yt-video-channel-title">{this.channelTitle}</h5>
          <a href={this.getYtUrl()} target="_blank">
            Youtube >
          </a>
        </figcaption>
      </figure>
    );
  }
}
