const PubSub = require('../helpers/pub_sub.js');


const IndividualMunroView = function (parent, information) {
  this.parent = parent;
  this.name = information.name;
  this.height = information.height;
  this.lat = information.latlng_lat;
  this.long = information.latlng_lng;
  this.region = information.region;
};

IndividualMunroView.prototype.render = function () {
  const container = document.createElement('div');
  container.appendChild(this.renderHeader());
  container.appendChild(this.renderHeight());
  container.appendChild(this.renderLat());
  container.appendChild(this.renderLong());
  container.appendChild(this.renderRegion());
  this.parent.appendChild(container);
};

IndividualMunroView.prototype.renderHeader = function () {
  const header = document.createElement('h2');
  header.textContent = this.name;
  return header;
};

IndividualMunroView.prototype.renderHeight = function () {
  const height = document.createElement('p');
  height.textContent = `${this.height}: metres`;
  return height;
};

IndividualMunroView.prototype.renderLat = function () {
  const lat = document.createElement('p');
  lat.textContent = `Latitude: ${this.lat}`;
  return lat;
};

IndividualMunroView.prototype.renderLong = function () {
  const long = document.createElement('p');
  long.textContent = `Longitude: ${this.long}`;
  return long;
};

IndividualMunroView.prototype.renderRegion = function () {
  const region = document.createElement('p');
  region.textContent = this.region;
  return region;
};

module.exports = IndividualMunroView;
