define(function(require, exports, module) {
  function content(Surface) {
    return new Surface({
      size: [undefined, undefined],
      content: ["Content"],
      classes: ["gray-bg"],
      properties: {
        lineHeight: window.innerHeight - 150 + 'px',
        textAlign: 'center'
      }
    })
  }

  return function(View, Surface) {
    return content(Surface);
  }
});