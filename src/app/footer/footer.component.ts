// src/app/footer/footer.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Hypothetical chatbot component
//import { ChatBotComponent } from '../chat-bot/chat-bot.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {}
