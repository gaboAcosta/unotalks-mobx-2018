
import React, { Component } from 'react'

export default class LikesComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0
    }
    this.like = this.like.bind(this)
  }
  like () {
    const { state: { likes }} = this
    this.setState({
      likes: likes + 1
    })
  }
  render() {
    const { state: { likes }} = this
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