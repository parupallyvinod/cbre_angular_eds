import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmeraldDesignSystemV2Module } from '@emerald-angular/design-system-v2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmeraldDesignSystemV2Module],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('cbre_angular_eds');
  navItems = [
    { label: 'Home', link: '/', icon: 'home' },
    { label: 'About', link: '/about', icon: 'info' },
    {
      label: 'Contact',
      icon: 'mail',
      active: true,
      children: [
        { label: 'Email', link: 'mailto:', icon: 'email' },
        { label: 'Phone', link: 'tel:', icon: 'phone' },
        {
          label: 'Address',
          link: 'https://maps.google.com',
          linkTarget: '_blank',
          icon: 'location_on',
        },
      ],
    },
    {
      label: 'Big label that can not fit in one line in the side navigation',
      icon: 'mail',
      children: [
        { label: 'Email', link: 'mailto:', icon: 'email' },
        { label: 'Phone', link: 'tel:', icon: 'phone' },
      ],
    },
    { label: 'About2', link: '/about', icon: 'info' },
  ];
}
