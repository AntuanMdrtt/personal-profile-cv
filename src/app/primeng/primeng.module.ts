import { NgModule } from '@angular/core';

// PrimeNGComponents
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { PanelModule } from 'primeng/panel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';


@NgModule({
  declarations: [],
  imports: [
    CardModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    PanelModule,
    ScrollTopModule,
    TagModule,
    TimelineModule,
  ],
  exports: [
    CardModule,
    CarouselModule,
    DividerModule,
    ImageModule,
    PanelModule,
    ScrollTopModule,
    TagModule,
    TimelineModule,
  ]
})
export class PrimengModule { }
