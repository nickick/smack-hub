define(function(require, exports, module) {
  function createHeaderGrid(GridLayout) {
    return headerGridLayout = new GridLayout({
      dimensions: [3,1]
    });
  }

  function createSidebarMenuIcon(View, ImageSurface, Modifier) {
    var sidebarIcon = new View();

    var menuModifier = new Modifier({
      origin: [0.1, 0.3333]
    })

    menuIcon = new ImageSurface({
      size: [20, 20]
    })

    menuIcon.setContent('../../content/images/menu.png')

    menuIcon.pipe(sidebarIcon);
    sidebarIcon._eventInput.on('click',function() {
      alert('got here!!!!');
    })

    sidebarIcon.add(menuModifier).add(menuIcon);
    return sidebarIcon;
  }

  function createHeaderMiddle(View, Surface, Modifier) {
    var headerView = new View();

    var headerSurface = new Surface({
      content: 'Smack Hub',
      size: [200, 100],
      classes: ['header-text'],
      properties: {
        fontSize: '40px'
      }
    });

    var headerModifier = new Modifier({
      origin: [0.5, 0.5]
    });

    return headerView.add(headerModifier).add(headerSurface);
  }

  function header(GridLayout, View, Surface, ImageSurface, Modifier) {
    var headerGridLayout = createHeaderGrid(GridLayout)
    var headerGridLayoutViews = [];
    headerGridLayout.sequenceFrom(headerGridLayoutViews);

    var sidebarMenuIcon = createSidebarMenuIcon(View, ImageSurface, Modifier);
    headerGridLayoutViews.push(sidebarMenuIcon);
    var headerMiddle = createHeaderMiddle(View, Surface, Modifier);
    headerGridLayoutViews.push(headerMiddle);
    return headerGridLayout;
  }

  return function(GridLayout, View, Surface, ImageSurface, Modifier) {
    return header(GridLayout, View, Surface, ImageSurface, Modifier);
  }
});