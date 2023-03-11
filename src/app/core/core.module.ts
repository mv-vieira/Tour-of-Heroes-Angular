import { TokenInterceptor } from './interceptors/token.interceptor';
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';


const COMPONENTS = [
  ToolbarComponent,
  MessagesComponent,
  PageNotFoundComponent,
  LoadingComponent,
  ConfirmationDialogComponent
]

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [COMPONENTS, MODULES],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule.'
        );
    }
  }
}
