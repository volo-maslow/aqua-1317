import { IConfigurationManager } from './configuration-manager.interface';

export class ConfigurationEnvManager implements IConfigurationManager {
  public getApiDelayMilliseconds(): number {
    return 5000;
  }
}
