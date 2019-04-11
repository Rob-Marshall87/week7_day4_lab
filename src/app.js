const Munros = require('./models/munros.js');
const MunrosContainer = require('./views/munros_container.js');
const SelectRegionView = require('./views/select_region_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munros = new Munros ();
  munros.bindEvents();

  const munrosContainer = new MunrosContainer();
  munrosContainer.bindEvents();

  const selectRegionView = new SelectRegionView();
  selectRegionView.bindEvents();


  munros.all();
});
