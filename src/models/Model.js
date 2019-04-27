import { db } from '../services/Firebase'
export class Model {

  constructor(data) {
    this.data = {}
    Object.assign(this.data, data)
    this.__proto__.constructor.props.forEach( (p) => {
      this.data[p] = this.data[p] || ""
    })
  }

  static fromFirebase(firebaseData) {
    let m = new this(firebaseData.data())
    m.data.id = firebaseData.id
    return m
  }

  persist() {
    if (this.data.id) {
      db().collection(this.constructor.name).doc(this.data.id).set(this.data);
    } else {
      db().collection(this.constructor.name).add(this.data).then((result) => {
        this.data.id = result.id
      }).catch(() => {
        alert("Something went wrong.  Please refresh and try again.")
      })
    }
  }
}
