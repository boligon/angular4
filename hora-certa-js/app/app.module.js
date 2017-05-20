(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var HoraCertaService = app.HoraCertaService;
  var AppComponent = app.AppComponent;
  var HoraCertaComponent = app.HoraCertaComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HoraCertaComponent],
    providers: [HoraCertaService],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

})(window.app || (window.app = {}));
