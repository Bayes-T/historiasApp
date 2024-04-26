import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx0Q3xbf1x0ZF1MZFVbRHdPMyBoS35RckVnWHZeeHBcRmFYWUBw');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
