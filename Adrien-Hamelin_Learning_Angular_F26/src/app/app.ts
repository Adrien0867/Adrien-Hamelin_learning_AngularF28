import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Adrien-Hamelin_Learning_Angular_F26');

  // Step 8: Two new typed variables
  studentName: string = 'Adrien Hamelin';
  courseTitle: string = 'MAD 307 Javascript Frameworks';
}