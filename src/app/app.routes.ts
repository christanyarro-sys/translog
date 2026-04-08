import { Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ServicesComponent } from './pages/services/services.component';
import { SuiviColisComponent } from './pages/suivi-colis/suivi-colis.component';
export const routes: Routes = [
  { path: '', component: AcceuilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'suivi-colis', component: SuiviColisComponent },
  { path: '**', redirectTo: '' }
];
