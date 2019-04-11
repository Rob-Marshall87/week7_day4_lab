const PubSub = require('../helpers/pub_sub.js');
const IndividualMunroView = require('./individual_munro_view.js');
// const RequestHelper = require('../helpers/request_helper.js')

const MunrosContainer = function () {
  this.munros = null
};

MunrosContainer.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (data) => {
    this.destroy();
    this.munros = data.detail.munros;
    this.render();
  });
};

MunrosContainer.prototype.render = function (){
  const container = document.getElementById('munros-container');
  this.munros.forEach((munro) => {
    const individualMunroView = new IndividualMunroView(container, munro);
    individualMunroView.render();
    // console.log(munroView);
  });
  document.body.appendChild(container);
};

MunrosContainer.prototype.destroy = function (){
  document.getElementById('munros-container').innerHTML = '';
};
module.exports = MunrosContainer;
