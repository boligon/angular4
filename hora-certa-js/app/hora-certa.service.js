(function(app) {
  var Class = ng.core.Class;

  function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  app.HoraCertaService = Class({
    constructor: function HoraCertaService() {      
    },
    
    getHoraCerta: function() {
      var dataAtual = new Date();
      var hora    = dataAtual.getHours();          
      var min     = dataAtual.getMinutes();        
      var seg     = dataAtual.getSeconds();     
      return pad(hora,2) + ':' + pad(min,2) + ':' + pad(seg,2);
    },
    generateHoraCerta: function(delay, callback) {
      var self = this;
      callback(this.getHoraCerta());
      setInterval(function() {
        callback(self.getHoraCerta());
      }, delay);
    }
  });

})(window.app || (window.app = {}));
