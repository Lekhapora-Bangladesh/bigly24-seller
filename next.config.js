/*
* Martfury - Admin Template
* Author: nouthemes
* Homepage: https://themeforest.net/user/nouthemes/portfolio
* Created at: n/a
* Updated at: n/a

* */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
  env: {
    title: 'Bigly24 - Seller',
    titleDescription: 'Buy Big, Sell Big',
  },
};

module.exports = withPlugins([withImages(), nextSettings]);
