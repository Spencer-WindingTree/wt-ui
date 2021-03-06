import React from 'react';

// Included addons
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
import { configureViewport } from '@storybook/addon-viewport';
import { setDefaults } from '@storybook/addon-info';


// Included styles
import '../src/css/app.scss';


// Addon-options
setOptions({
  name: "Winding Tree UI",
  url: "https://github.com/windingtree/wt-ui",
  // showAddonPanel: false,
  addonPanelInRight: true,
});


// Addon-info
setDefaults({
  header: false,
  // inline: true,
});


addDecorator(story => (
  <div style={{margin: '20px'}}>
    {story()}
  </div>
));


// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
