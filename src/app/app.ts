import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangSwitch } from './ui/lang-switch/lang-switch';

@Component({
  imports: [RouterOutlet, LangSwitch],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
