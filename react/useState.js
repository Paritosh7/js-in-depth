/** React */
const React = (function () {
  function useState(initVal) {
    let _val = initVal;
    let state = () => _val;
    const setState = (newVal) => {
      _val = newVal;
    };

    return [state, setState];
  }

  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render };
})();

/** Component */

function Component() {
  const [count, setCount] = React.useState(1);

  return {
    render: () => console.log(count),
    click: () => setCount(count),
  };
}

const App = React.render(Component);
App.render();
App.click();
App.render();
