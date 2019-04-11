const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros = function () {
  this.munros = null;
};

Munros.prototype.bindEvents = function () {
  PubSub.subscribe('SelectRegionView:filter-changed', (data) => {
    this.regions(data.detail);
  })
};

Munros.prototype.all = function () {
  const request = new RequestHelper('https://munroapi.herokuapp.com/munros');
  request.get()
    .then((data) => {
      this.publish(data);
      PubSub.publish('Munros:drop-data-ready', {munros: data});
      this.munros = data;
    });
};

Munros.prototype.regions = function (region) {
  const request = new RequestHelper(`https://munroapi.herokuapp.com/munros/region/${region}`);
  request.get()
    .then(this.publish);
};

Munros.prototype.publish = function (data) {
  PubSub.publish('Munros:data-ready', {munros: data});
};

module.exports = Munros;
