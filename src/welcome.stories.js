import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Welcome', module);


stories
  .addDecorator(withKnobs)

stories.add('Welcome', () => (
  <div className="container" style={{color: '#ffffff', fontSize: '28px'}}>
  Welcome to my Storybook<br/>
  Please Use the Left Panel to access the Components<br/>
  Use the bottom Panel Knobs to Change the Props of the Components
  </div>
));

