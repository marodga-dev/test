import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuVisible = false;
  submenuVisible = false;
  showSubmenu = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    if (!this.menuVisible) {
      this.submenuVisible = false;
    }
  }

  closeMenu() {
    this.menuVisible = false;
    this.submenuVisible = false;
  }

scrollTo(id: string) {
  // Si no estás en la raíz, navega y luego haz scroll
  if (this.router.url !== '/') {
    this.router.navigateByUrl('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50); // Espera a que se renderice el contenido
    });
  } else {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  this.closeMenu();
}
}
