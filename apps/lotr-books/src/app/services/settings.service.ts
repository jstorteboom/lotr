import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  appConfig: any = {};

  getValue(key: string): string | any {
    return this.appConfig[key];
  }

  getConfig<T>(key: string): T {
    return <T>this.appConfig[key];
  }

  setConfig(config: any)
  {
    this.appConfig = {...this.appConfig, ...config};
  }

  setValue(key: string, config: any): void {
    if (typeof config === "string") {
      this.appConfig[key] = config;
    } else {
      this.appConfig[key] = config;
    }
  }
}
