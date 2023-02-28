// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {onResponse: false}

  submitResponse = () => {
    this.setState({onResponse: true})
  }

  render() {
    const {onResponse} = this.state
    const {resources} = this.props

    return (
      <div className="bg-container">
        <div className="emoji-container">
          {onResponse === false ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="list-container">
                {resources.emojis.map(each => (
                  <li key={each.id} className="list-item">
                    <div>
                      <button className="button" type="button">
                        <img
                          className="emoji"
                          src={each.imageUrl}
                          alt={each.name}
                          onClick={this.submitResponse}
                        />
                      </button>
                    </div>
                    <p className="expression"> {each.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <li className="list-item">
              <img
                className="love-image"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="heading">Thank You!</h1>
              <p className="description">
                we will use your feedback to improve our customer support
                performance
              </p>
            </li>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
