import _ from 'lodash';

const betterFn = _.throttle(actionFn, 1000);

document.getElementById("clicked").addEventListener("click", betterFn);

function actionFn() {
  document.getElementById(
    "display"
  ).textContent = `click @ ${new Date().toLocaleTimeString()}`;
}
