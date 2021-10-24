import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http'
import { TableDataService } from "./table-data-service.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
  
    constructor(private tableDataService: TableDataService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
    
        const authReq = req.clone({});
        const dataCashed = this.tableDataService.getDataCached();
        const cachedResponse: HttpResponse<any> = new HttpResponse({ status: 200, body: dataCashed });

        if (dataCashed) {
            this.tableDataService.recordDataCashed(dataCashed.result = req.body);
            return of(cachedResponse.clone())
        } else {
            return next.handle(authReq).pipe(tap((event: any) => {
                const value = event.body;
                this.tableDataService.recordDataCashed(value);
            }));
        }

    }
}


