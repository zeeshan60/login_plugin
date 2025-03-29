import { WebPlugin } from '@capacitor/core';

import type { LoginPluginPlugin } from './definitions';

export class LoginPluginWeb extends WebPlugin implements LoginPluginPlugin {
  async login(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
