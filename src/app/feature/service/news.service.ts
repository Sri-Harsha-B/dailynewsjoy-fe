import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class NewsService {

    constructor(private readonly http: HttpClient) { }


    getNews(): Observable<any> {
        return this.http.get('http://localhost:8080/getAPINews', {
        })
    }


}