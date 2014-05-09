/* globals define */
define(function(require, exports, module) {
  'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var GridLayout = require('famous/views/GridLayout')
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var ImageSurface = require("famous/surfaces/ImageSurface");
    var Modifier  = require("famous/core/Modifier");

    // create the main context
    var mainContext = Engine.createContext();
    var layout = new HeaderFooterLayout({
      headerSize: 100,
      footerSize: 50
    });

    addHeader();
    addContent();
    addFooter();

    function addHeader() {
      var head = require('../src/views/header.js')(GridLayout, View, Surface, ImageSurface, Modifier);
      layout.header.add(head);
    }

    function addContent() {
      var content = require('../src/views/content.js')(View, Surface);
      layout.content.add(content);
    }

    function addFooter() {
      var footer = require('../src/views/footer.js')(View, Surface);
      layout.footer.add(footer);
    }

    mainContext.add(layout);
  });
