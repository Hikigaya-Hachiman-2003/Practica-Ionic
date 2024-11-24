import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Ejemplo, GfncElement, GfncService } from '../services/gfnc.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailsPage implements OnInit {

  characterId!: string;
  character: Ejemplo | null = null;

  constructor(private route: ActivatedRoute, private gfncService: GfncService) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.characterId = id;

      try {
        // Llamar al servicio y extraer los datos desde "ejemplo"
        const response = await this.gfncService.getById(this.characterId);
        this.character = response.ejemplo; // Accede al objeto "ejemplo"
        console.log('Character details:', this.character);
      } catch (error) {
        console.error('Error al cargar los detalles del personaje:', error);
      }
    } else {
      console.error('ID no encontrado en la ruta');
    }
  }
  
}
