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

    saveNews(news: any): Observable<any> {
        return this.http.post('http://localhost:8080/saveNews', news, {
            observe: 'response'
        })
    }

    getDBNews(): Observable<any> {
        return this.http.get('http://localhost:8080/getDBNews', {
        })
    }

}