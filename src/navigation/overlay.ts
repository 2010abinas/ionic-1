import { NavOptions } from './nav-util';

export interface Overlay {
  present(opts?: NavOptions): Promise<any>;
  dismiss(data?: any, role?: any, navOptions?: NavOptions): Promise<any>;
  onDidDismiss(callback: Function): void;
  onWillDismiss(callback: Function): void;
}
