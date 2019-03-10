import { Model } from './Model'

export class Bar extends Model {
  static props = ["barId", "wifiQuality", "nerdSighting",
    "wifiName", "wifiPass", "hasElectricity", "hasCoatHooks"]
}
