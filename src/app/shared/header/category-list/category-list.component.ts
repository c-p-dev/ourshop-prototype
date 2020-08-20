import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';
import { ICategoryList } from 'src/app/interfaces';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

    categoryList: ICategoryList;
    show = false;
    activeList : ICategoryList;
    constructor(
        private headerService: HeaderService
    ) { }

    ngOnInit(): void {
        this.getCategoryList()
    }

    getCategoryList(){
        this.headerService.getCategoryList().subscribe((data: ICategoryList ) => {
            this.categoryList = data;
        });
    }

    showHoveredList(list : ICategoryList){
        this.show = true;
        this.activeList = list;
    }



}
