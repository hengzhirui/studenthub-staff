import { NgModule } from '@angular/core';
import { EnvConfig } from './environments.token';

// Local Environments
import { khalidVariables } from './config/local.khalid';

// Server Environments
import { devVariables } from './config/server.dev';
import { prodVariables } from './config/server.prod';

declare const process: any; // Typescript compiler will complain without this

export function environmentFactory() {
  // return process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
  switch(process.env.NODE_ENV){
    case "prod":
      return prodVariables;
    case "dev":
      return devVariables;
    case "khalid":
      return khalidVariables;
    default:
      return devVariables;
  }
}

@NgModule({
  providers: [
    {
      provide: EnvConfig,
      // useFactory instead of useValue so we can easily add more logic as needed.
      useFactory: environmentFactory
    }
  ]
})
export class EnvironmentsModule {}