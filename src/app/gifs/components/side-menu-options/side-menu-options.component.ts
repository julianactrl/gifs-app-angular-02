import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'gifs-side-menu-options',
    standalone: true,
    imports: [
        RouterOutlet,
    ],
    templateUrl: './side-menu-options.component.html',
})
export default class SideMenuOptionsComponent { }
