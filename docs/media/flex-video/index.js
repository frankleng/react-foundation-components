import React, { Component } from 'react';

import { FlexVideo } from '../../../src';

export default class FlexVideoPage extends Component {
  render() {
    return (
      <div>
        <h1>Flex Video</h1>
        <p>
          Wrap embedded videos from YouTube, Vimeo, and others in a flex video container to ensure
          they maintain the correct aspect ratio regardless of screen size.
        </p>
        <h2>Basics</h2>
        <p>Importing the FlexVideo component:</p>
        <pre>
          <code>
{
`import FlexVideo from 'react-foundation-components/lib/media/flex-video';`
}
          </code>
        </pre>
        <p>
          All the props you can set on iframe can also be set on the FlexVideo component.
        </p>
        <pre>
          <code>
{
`<FlexVideo
  allowFullScreen
  frameBorder="0"
  height="315"
  src="https://www.youtube.com/embed/V9gkYw35Vws"
  width="420"
/>`
}
          </code>
        </pre>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube.com/embed/V9gkYw35Vws"
          width="420"
        />
        <p>
          The default ratio is 4:3. Set the <code>widescreen</code> prop to change it to 16:9.
        </p>
        <pre>
          <code>
{
`<FlexVideo
  allowFullScreen
  frameBorder="0"
  height="315"
  src="https://www.youtube.com/embed/aiBt44rrslw"
  widescreen
  width="420"
/>`
}
          </code>
        </pre>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="315"
          src="https://www.youtube.com/embed/aiBt44rrslw"
          widescreen
          width="420"
        />
        <p>
          Embedded Vimeo videos are special snowflakes of their own. Set the <code>vimeo</code> prop
          to display a Vimeo video.
        </p>
        <pre>
          <code>
{
`<FlexVideo
  allowFullScreen
  frameBorder="0"
  height="225"
  src="http://player.vimeo.com/video/60122989"
  vimeo
  width="400"
/>`
}
          </code>
        </pre>
        <FlexVideo
          allowFullScreen
          frameBorder="0"
          height="225"
          src="http://player.vimeo.com/video/60122989"
          vimeo
          width="400"
        />
      </div>
    );
  }
}