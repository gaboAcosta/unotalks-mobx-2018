
import React, { Component } from 'react'
import { observer } from 'mobx-react'
import LikesModel from './LikesModel'

@observer
export default class LikesComponent extends Component {
  constructor(props){
    super(props)
    this.model = new LikesModel()
    this.like = this.like.bind(this)
  }
  like () {
    this.model.addLike()
  }
  render() {
    const { likes } = this.model
    return (
      <div>
        <h3>This is the like counter component</h3>
        <table>
          <thead>
            <tr>
              <th>
                Likes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {likes}
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.like}>Like me!</button>
      </div>
    )
  }
}