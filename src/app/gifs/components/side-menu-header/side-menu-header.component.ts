import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'gifs-side-menu-header',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './side-menu-header.component.html',
})
export default class SideMenuHeaderComponent { }
