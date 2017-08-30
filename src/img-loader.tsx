import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'img-loader'
})
export class ImgLoader {

  @Prop()
  src: string;

  @Prop()
  set useImg(val: boolean) {
    this._useImg = typeof val !== 'boolean' || val;
  }

  _useImg: boolean = false;

  @Element() element: HTMLElement;

  componentWillLoad() {
    let imageLoaderService: any = document.querySelector('image-loader');

    if (!imageLoaderService) {
      imageLoaderService = document.createElement('image-loader');
      document.body.appendChild(imageLoaderService);
    }


    // idk how to check if element is ready, so i'm waiting 1000ms
    setTimeout(() => {
      imageLoaderService.getImagePath(this.src)
        .then((imagePath: string) => {

          if (this._useImg) {
            let element: HTMLImageElement = document.createElement('img');
            element.src = imagePath;
            this.element.appendChild(element);
          } else {
            this.element.style.width = '350px';
            this.element.style.height = '150px';
            this.element.style.display = 'block';
            this.element.style.backgroundImage = `url('${ imagePath }')`;
          }

        });
    }, 1000);
  }

  render() {
    // TODO return temporary spinner until our async methods figure out the image path
    return;
  }
}
