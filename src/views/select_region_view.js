const PubSub = require('../helpers/pub_sub.js');

const SelectRegionView = function (){
  this.regionNames = [];
};

SelectRegionView.prototype.bindEvents = function (){
  PubSub.subscribe('Munros:drop-data-ready', (data) => {
    this.destroy();
    this.extractNames(data.detail.munros);
    this.render();
    document.getElementById('drop-down-select')
      .addEventListener('change', this.handleChange);
  });
};

SelectRegionView.prototype.extractNames = function (munros){
  this.regionNames = munros.map((munro) => {
    return munro.region;
  })
  .filter( (value, index, self) => {
    return self.indexOf(value) === index;
  });
};

SelectRegionView.prototype.render = function (){
  const select = document.getElementById('drop-down-select');
  this.regionNames.forEach((name) => {
    select.appendChild(this.createOption(name));
  });
  document.getElementById('select').appendChild(select);

};

SelectRegionView.prototype.createOption = function (value){
  const option = document.createElement('option');
  option.textContent = value;
  return option;
};

SelectRegionView.prototype.handleChange = function(evt){
  PubSub.publish('SelectRegionView:filter-changed', evt.target.value);
};

SelectRegionView.prototype.destroy = function (){
  document.getElementById('drop-down-select').innerHTML = '';
};

module.exports = SelectRegionView;
