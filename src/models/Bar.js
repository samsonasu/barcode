import { Model } from './Model'

export class Bar extends Model {
  static props = ["name", "barStyle", "vodkaPrice",
    "wifiName", "wifiPass", "wifiSecure", "wifiFirewall",
    "hasElectricity", "hasCoatHooks"]
}
