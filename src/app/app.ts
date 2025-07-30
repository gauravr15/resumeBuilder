import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Resume } from './resume/resume';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resume],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'resume';
}
