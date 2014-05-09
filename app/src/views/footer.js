define(function(require, exports, module) {
  function footer(Surface) {
    return new Surface({
      content: 'Footer',
      classes: ['red-bg'],
      size: [undefined, 50],
      properties: {
        lineHeight: '50px',
        textAlign: 'center'
      }
    });
  }

  return function(View, Surface) {
    return footer(Surface);
  }
});