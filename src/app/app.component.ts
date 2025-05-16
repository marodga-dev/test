import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';  // <-- IMPORTA NgIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf],  // <-- AÑADE NgIf aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }

  // El HostListener para cerrar menú si haces click fuera también puede quedarse
}
