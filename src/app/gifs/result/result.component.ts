import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {

  constructor(private GifsService: GifsService) { }
  
  get resultado():Gif[]{
    return this.GifsService.resultado;
  }


}
