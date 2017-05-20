export class HoraCertaService {

  private horaCerta: any;

  private getHoraCerta(): any {    
    let dataAtual = new Date();
    return dataAtual.getHours() + ':' + dataAtual.getMinutes() + ':' + dataAtual.getSeconds();

  }

  generateHoraCerta(delay: number, callback: (horaCerta: any) => void) {
    callback(this.getHoraCerta());
    setInterval(() => callback(this.getHoraCerta()), delay);
  }

}
