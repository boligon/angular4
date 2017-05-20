(function(app) {
  var Component = ng.core.Component;
  var HoraCertaService = app.HoraCertaService;

  app.HoraCertaComponent = Component({
    selector: 'hora-certa',
    template: '<p> Hora Certa: <em>{{horaCerta}}</em></p>'
  })
  .Class({
    constructor: [HoraCertaService, function HoraCertaComponent(horaCertaService) {
      var self = this;
      horaCertaService.generateHoraCerta(1000, function(horaCerta) {
        self.horaCerta = horaCerta;
      });
    }]
  });

})(window.app || (window.app = {}));
