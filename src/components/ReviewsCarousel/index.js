import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    ActiveReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {ActiveReviewIndex} = this.state
    const {reviewsData} = this.props

    if (ActiveReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        ActiveReviewIndex: prevState.ActiveReviewIndex + 1,
      }))
    }
  }

  renderImages = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {ActiveReviewIndex} = this.state

    if (ActiveReviewIndex > 0) {
      this.setState(prevState => ({
        ActiveReviewIndex: prevState.ActiveReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {ActiveReviewIndex} = this.state
    const currentReviewDate = reviewsData[ActiveReviewIndex]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="content-container">
          <button
            type="button"
            className="arrow-button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
            />
          </button>
          {this.renderImages(currentReviewDate)}
          <button
            type="button"
            className="arrow-button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
