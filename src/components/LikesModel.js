
import { observable } from 'mobx'

export default class LikesModel {
  @observable likes = 0

  addLike() {
    this.likes ++
  }
}