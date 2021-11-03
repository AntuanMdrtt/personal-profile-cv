import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

// Components
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceEducationComponent } from './experience-education/experience-education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    AboutMeComponent,
    ExperienceEducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ],
  imports: [
    PrimengModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AboutMeComponent,
    ExperienceEducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
