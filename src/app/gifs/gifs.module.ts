import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchComponent,
    ResultComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
