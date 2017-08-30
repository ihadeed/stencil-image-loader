import { Component, Method } from '@stencil/core';

@Component({
  tag: 'image-loader'
})
export class ImageLoader {

  @Method()
  getImagePath(imageUrl: string): Promise<string> {
    // just testing this out
    return Promise.resolve(imageUrl);
  }

  render() {
    return;
  }
}
