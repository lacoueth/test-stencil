/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface TrkoAnnotation {
    /**
    * The content annotated
    */
    'annotated': string;
    /**
    * The content of the annotation
    */
    'annotation': string;
  }
  interface TrkoAnnotationAttributes extends StencilHTMLAttributes {
    /**
    * The content annotated
    */
    'annotated'?: string;
    /**
    * The content of the annotation
    */
    'annotation'?: string;
    'onAnnotationClick'?: (event: CustomEvent) => void;
  }

  interface TrkoBlockquote {
    /**
    * Text alignment 'left' | 'center' | 'right'
    */
    'alignment': string;
    /**
    * Author
    */
    'author': string;
    /**
    * Additional classes
    */
    'class': string;
    /**
    * Link to the source
    */
    'link': string;
  }
  interface TrkoBlockquoteAttributes extends StencilHTMLAttributes {
    /**
    * Text alignment 'left' | 'center' | 'right'
    */
    'alignment'?: string;
    /**
    * Author
    */
    'author'?: string;
    /**
    * Additional classes
    */
    'class'?: string;
    /**
    * Link to the source
    */
    'link'?: string;
  }

  interface TrkoBox {
    /**
    * The class(es) to add to the container
    */
    'class': string;
    /**
    * Title of the box
    */
    'heading': string;
    'id': string;
  }
  interface TrkoBoxAttributes extends StencilHTMLAttributes {
    /**
    * The class(es) to add to the container
    */
    'class'?: string;
    /**
    * Title of the box
    */
    'heading'?: string;
    'id'?: string;
  }

  interface TrkoDocPrinter {
    /**
    * The Markdown-Katex-HTML raw text input
    */
    'mdHtmlContent': string;
  }
  interface TrkoDocPrinterAttributes extends StencilHTMLAttributes {
    /**
    * The Markdown-Katex-HTML raw text input
    */
    'mdHtmlContent'?: string;
  }

  interface TrkoHideShow {
    /**
    * The title of the hidden block
    */
    'heading': string;
    /**
    * Initial opening state of the block
    */
    'hidden': boolean;
  }
  interface TrkoHideShowAttributes extends StencilHTMLAttributes {
    /**
    * The title of the hidden block
    */
    'heading'?: string;
    /**
    * Initial opening state of the block
    */
    'hidden'?: boolean;
  }

  interface TrkoImage {
    /**
    * Description of the image
    */
    'description': string;
    /**
    * Title of the image
    */
    'title': string;
    /**
    * The content annotated
    */
    'url': string;
  }
  interface TrkoImageAttributes extends StencilHTMLAttributes {
    /**
    * Description of the image
    */
    'description'?: string;
    /**
    * Title of the image
    */
    'title'?: string;
    /**
    * The content annotated
    */
    'url'?: string;
  }

  interface TrkoYoutubeVideo {
    /**
    * Description of the video
    */
    'description': string;
    'src': string;
    /**
    * The YT video id
    */
    'video-id': string;
  }
  interface TrkoYoutubeVideoAttributes extends StencilHTMLAttributes {
    /**
    * Description of the video
    */
    'description'?: string;
    'src'?: string;
    /**
    * The YT video id
    */
    'video-id'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'TrkoAnnotation': Components.TrkoAnnotation;
    'TrkoBlockquote': Components.TrkoBlockquote;
    'TrkoBox': Components.TrkoBox;
    'TrkoDocPrinter': Components.TrkoDocPrinter;
    'TrkoHideShow': Components.TrkoHideShow;
    'TrkoImage': Components.TrkoImage;
    'TrkoYoutubeVideo': Components.TrkoYoutubeVideo;
  }

  interface StencilIntrinsicElements {
    'trko-annotation': Components.TrkoAnnotationAttributes;
    'trko-blockquote': Components.TrkoBlockquoteAttributes;
    'trko-box': Components.TrkoBoxAttributes;
    'trko-doc-printer': Components.TrkoDocPrinterAttributes;
    'trko-hide-show': Components.TrkoHideShowAttributes;
    'trko-image': Components.TrkoImageAttributes;
    'trko-youtube-video': Components.TrkoYoutubeVideoAttributes;
  }


  interface HTMLTrkoAnnotationElement extends Components.TrkoAnnotation, HTMLStencilElement {}
  var HTMLTrkoAnnotationElement: {
    prototype: HTMLTrkoAnnotationElement;
    new (): HTMLTrkoAnnotationElement;
  };

  interface HTMLTrkoBlockquoteElement extends Components.TrkoBlockquote, HTMLStencilElement {}
  var HTMLTrkoBlockquoteElement: {
    prototype: HTMLTrkoBlockquoteElement;
    new (): HTMLTrkoBlockquoteElement;
  };

  interface HTMLTrkoBoxElement extends Components.TrkoBox, HTMLStencilElement {}
  var HTMLTrkoBoxElement: {
    prototype: HTMLTrkoBoxElement;
    new (): HTMLTrkoBoxElement;
  };

  interface HTMLTrkoDocPrinterElement extends Components.TrkoDocPrinter, HTMLStencilElement {}
  var HTMLTrkoDocPrinterElement: {
    prototype: HTMLTrkoDocPrinterElement;
    new (): HTMLTrkoDocPrinterElement;
  };

  interface HTMLTrkoHideShowElement extends Components.TrkoHideShow, HTMLStencilElement {}
  var HTMLTrkoHideShowElement: {
    prototype: HTMLTrkoHideShowElement;
    new (): HTMLTrkoHideShowElement;
  };

  interface HTMLTrkoImageElement extends Components.TrkoImage, HTMLStencilElement {}
  var HTMLTrkoImageElement: {
    prototype: HTMLTrkoImageElement;
    new (): HTMLTrkoImageElement;
  };

  interface HTMLTrkoYoutubeVideoElement extends Components.TrkoYoutubeVideo, HTMLStencilElement {}
  var HTMLTrkoYoutubeVideoElement: {
    prototype: HTMLTrkoYoutubeVideoElement;
    new (): HTMLTrkoYoutubeVideoElement;
  };

  interface HTMLElementTagNameMap {
    'trko-annotation': HTMLTrkoAnnotationElement
    'trko-blockquote': HTMLTrkoBlockquoteElement
    'trko-box': HTMLTrkoBoxElement
    'trko-doc-printer': HTMLTrkoDocPrinterElement
    'trko-hide-show': HTMLTrkoHideShowElement
    'trko-image': HTMLTrkoImageElement
    'trko-youtube-video': HTMLTrkoYoutubeVideoElement
  }

  interface ElementTagNameMap {
    'trko-annotation': HTMLTrkoAnnotationElement;
    'trko-blockquote': HTMLTrkoBlockquoteElement;
    'trko-box': HTMLTrkoBoxElement;
    'trko-doc-printer': HTMLTrkoDocPrinterElement;
    'trko-hide-show': HTMLTrkoHideShowElement;
    'trko-image': HTMLTrkoImageElement;
    'trko-youtube-video': HTMLTrkoYoutubeVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
