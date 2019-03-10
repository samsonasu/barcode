import { db } from '../services/Firebase'
export class Model {

  constructor(data) {
    this.data = {}
    Object.assign(this.data, data)
    this.__proto__.constructor.props.forEach( (p) => {
      this.data[p] = this.data[p] || ""
    })
  }

  static fromFirebase(fbData) {
    let m = new this(fbData.data())
    m.data.id = fbData.id
    return m
  }

  persist() {
    db().collection("bars").doc(this.data.id).set(this.data);
  }
}