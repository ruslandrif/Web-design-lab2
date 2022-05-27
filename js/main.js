import Model from './model/model.js';
import View from './view/view.js';
import Controller from './controller/controller.js';
let model_ = new Model();
let view_ = new View(model_);
var path = window.location.pathname;
var page = path.split("/").pop();
let controller_ = new Controller(model_, view_, page === "calc_for_devs.html");

