import { Injectable } from '@angular/core';
import { FarmerSearchAbstractProvider } from './farmer-search-abstract-provider.service';
import { Farmer } from '../models/farmer';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable()
export class FarmerSearchCarService extends FarmerSearchAbstractProvider {
    constructor(private http: HttpClient) {
        super();
    }
    searchFarmers(nameOrDocument: string): Promise<Farmer[]> {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json; charset=utf-8')

        return this.http.get<Farmer[]>("http://localhost:3000/farmers/"+nameOrDocument, { headers }).toPromise();
    }
}