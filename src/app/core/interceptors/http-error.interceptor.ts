/* eslint-disable prefer-const */
import { MessageService } from './../services/message.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = '';

        if(err.error instanceof ErrorEvent) {
          errorMsg = `Error ${err.error.message}`
        } else {
          errorMsg = `Error Code: ${err.status}, Message: ${err.message}`
        }

        this.messageService.add(errorMsg);

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}