import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar este módulo
import { AppComponent } from './app.component';
import { DolarComponent } from './dolar/dolar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { MercaComponent } from './merca/merca.component';
import { OroComponent } from './oro/oro.component';
import { NaftaComponent } from './nafta/nafta.component';
import { BigmacComponent } from './bigmac/bigmac.component';
import { HeinekenComponent } from './heineken/heineken.component';
import { CocacolaComponent } from './cocacola/cocacola.component';
import { ForrosprimeComponent } from './forrosprime/forrosprime.component';
import { MinimosubeComponent } from './minimosube/minimosube.component';
import { PrensadoComponent } from './prensado/prensado.component';
import { FloresComponent } from './flores/flores.component';
import { InflacionanualComponent } from './inflacionanual/inflacionanual.component';
import { DatePipe } from '@angular/common';
import { DolarblueComponent } from './dolarblue/dolarblue.component';
import { FooterComponent } from './footer/footer.component';
import { PhillipboxComponent } from './phillipbox/phillipbox.component';



@NgModule({
  declarations: [
    AppComponent,
    DolarComponent,
    BitcoinComponent,
    TemperatureComponent,
    MercaComponent,
    OroComponent,
    NaftaComponent,
    BigmacComponent,
    HeinekenComponent,
    CocacolaComponent,
    ForrosprimeComponent,
    MinimosubeComponent,
    PrensadoComponent,
    FloresComponent,
    InflacionanualComponent,
    DolarblueComponent,
    FooterComponent,
    PhillipboxComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatCardModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

