import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    constructor(private http: HttpClient) { 

    }

    getCategoryList(){
        return this.http.get('assets/mock/category-list.json')
    }

}
