import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-suivi-colis',
  standalone: true,
  imports: [CommonModule, FormsModule, AnimateOnScrollDirective],
  templateUrl: './suivi-colis.component.html',
  styleUrl: './suivi-colis.component.css'
})
export class SuiviColisComponent {
  numeroSuivi = '';
  colisInfo: any = null;
  erreur = false;

  private colisDemo: any = {
    'TL-2024-123456': {
      reference: 'TL-2024-123456',
      statut: 'En transit',
      statutClass: 'en-transit',
      origine: 'Shanghai, Chine',
      destination: 'Douala, Cameroun',
      transport: 'Maritime',
      livraison: '15 Mars 2024',
      etapes: [
        { titre: 'Colis réceptionné', description: 'Prise en charge à Shanghai', date: '01 Mars 2024 - 08h00', icone: 'fas fa-box', actif: true },
        { titre: 'Dédouanement export', description: 'Formalités douanières effectuées', date: '02 Mars 2024 - 14h00', icone: 'fas fa-file-contract', actif: true },
        { titre: 'Départ du port', description: 'Chargement sur le navire MSC DIANA', date: '03 Mars 2024 - 09h00', icone: 'fas fa-ship', actif: true },
        { titre: 'En mer', description: 'En route vers Douala', date: 'En cours...', icone: 'fas fa-water', actif: false },
        { titre: 'Arrivée à Douala', description: 'Livraison au destinataire', date: 'Prévu : 15 Mars 2024', icone: 'fas fa-flag-checkered', actif: false }
      ]
    },
    'TL-2024-789012': {
      reference: 'TL-2024-789012',
      statut: 'Livré',
      statutClass: 'livre',
      origine: 'Paris, France',
      destination: "Abidjan, Côte d'Ivoire",
      transport: 'Aérien',
      livraison: '28 Février 2024',
      etapes: [
        { titre: 'Colis réceptionné', description: 'Prise en charge à Paris CDG', date: '25 Fév 2024 - 10h00', icone: 'fas fa-box', actif: true },
        { titre: 'Départ aéroport', description: 'Vol Air France AF702', date: '26 Fév 2024 - 22h00', icone: 'fas fa-plane-departure', actif: true },
        { titre: 'Arrivée Abidjan', description: "Atterrissage à l'aéroport FHB", date: '27 Fév 2024 - 06h00', icone: 'fas fa-plane-arrival', actif: true },
        { titre: 'Livré', description: 'Colis remis au destinataire', date: '28 Fév 2024 - 14h30', icone: 'fas fa-check-circle', actif: true }
      ]
    }
  };

  rechercherColis() {
    this.erreur = false;
    this.colisInfo = null;
    if (!this.numeroSuivi.trim()) return;
    const result = this.colisDemo[this.numeroSuivi.trim().toUpperCase()];
    if (result) {
      this.colisInfo = result;
    } else {
      this.erreur = true;
    }
  }
}