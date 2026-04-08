import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, AnimateOnScrollDirective],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  submitted = false;

  formData = {
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    entreprise: '',
    message: ''
  };

  onSubmit() {
    this.submitted = true;
    console.log('Formulaire soumis:', this.formData);
  }
}