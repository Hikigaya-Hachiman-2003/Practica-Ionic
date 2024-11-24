import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GfncElement, GfncService } from '../services/gfnc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gfnc',
  templateUrl: './gfnc.page.html',
  styleUrls: ['./gfnc.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GfncPage implements OnInit {

  gfncall: GfncElement[] = []

  gfncService = inject(GfncService);

  errorMessage: string | null = null; 

  constructor(private router: Router) { }

  async ngOnInit() {
    try {
      const response = await this.gfncService.getAll();
      this.gfncall = response.gfnc;
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      this.errorMessage = 'Hubo un problema al cargar los productos. Inténtalo de nuevo más tarde.';
    }
  }

  goToDetails(id: string) {
    this.router.navigate(['/details', id]); // Redirige a la página de detalles
  }

}
