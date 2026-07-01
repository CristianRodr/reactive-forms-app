import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { reactiveRoutes } from '../../../reactive/reactive.routes';

interface MenuItem {
  title: string;
  route: string;
}

const reactiveItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  reactiveMenuItems: MenuItem[] = reactiveItems
    .filter((item) => item.path !== '**')
    .map((route) => ({
      title: `${route.title}`,
      route: `reactive/${route.path}`,
    }));

  authMenuItems: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth',
    },
  ];

  countryMenuItems: MenuItem[] = [
    {
      title: 'Paises',
      route: './country',
    },
  ];
}
