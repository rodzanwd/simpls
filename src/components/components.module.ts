import { NgModule } from '@angular/core';
import { ModalComponent } from './modal/modal';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { SlideComponent } from './slide/slide';
@NgModule({
	declarations: [ModalComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent],
	imports: [],
	exports: [ModalComponent,
    HeaderComponent,
    FooterComponent,
    SlideComponent]
})
export class ComponentsModule {}
