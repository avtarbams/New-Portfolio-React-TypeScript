import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const stories = storiesOf('welcomeStory', module);

const storyWrapper = story => {
  return <div style={{ margin: '5%' }}>{story()}</div>;
};

stories
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(storyWrapper)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(readme))

stories.add('welcomeStory', () => (
  <div className="container">
    Welcome to the Storybook of Avtar Singh Bamra Portfolio
  </div>
));