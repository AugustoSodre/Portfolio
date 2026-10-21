import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './ui/top-bar/top-bar';

@Component({
  imports: [RouterOutlet, TopBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
