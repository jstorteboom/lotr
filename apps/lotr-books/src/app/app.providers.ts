import { APP_INITIALIZER } from "@angular/core";
import { SettingsService } from "@lens/core/lib";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

export const providers = [
    {
        provide: APP_INITIALIZER,
        useFactory: (settings: SettingsService) => () => of('https://the-one-api.dev/v2/').pipe(tap(apiUrl => settings.setValue('apiUrl', apiUrl))),
        deps: [SettingsService],
        multi: true
    }
];