import { Component } from '@angular/core';
import { Education } from './right-column/education/education';
import { Certificates } from './left-column/certificates/certificates';
import { Experience } from './right-column/experience/experience';
import { Languages } from './left-column/languages/languages';
import { Projects } from './right-column/projects/projects';
import { Skills } from './left-column/skills/skills';
import { Summary } from './summary/summary';
import { HeaderBanner } from './header-banner/header-banner';
import { ProgrammingLanguage } from "./left-column/programming-language/programming-language";

@Component({
  selector: 'app-resume',
  imports: [Education, Certificates, Experience, Languages, Projects, Skills, Summary, HeaderBanner, ProgrammingLanguage],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class Resume {

}
