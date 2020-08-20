import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-strip',
    templateUrl: './header-strip.component.html',
    styleUrls: ['./header-strip.component.scss']
})
export class HeaderStripComponent implements OnInit {

    stripTabLinks = [
        {
            name:'About Us',
            link: '',
        },
        {
            name:'Sell with Us',
            link: '',
        },
        {
            name:'FAQ',
            link: '',
        },
        {
            name:'Contact Us',
            link: '',
        }
    ]

    constructor() { }

    ngOnInit(): void {

        
    }

}
