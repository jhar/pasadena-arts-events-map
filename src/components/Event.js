import React, { Component, PropTypes } from 'react'
import '../css/event.css'

export default class Event extends Component {
  state = { animateDescEvt: false, showDescEvt: false }

  componentWillReceiveProps() {
    this.setState({ animateDescEvt: false, showDescEvt: false })
  }

  handleLoad = (e) => {
    e.target.style.top = this.props.getTop(e, this.props.offset, true) + 'px'
  }

  toggleDescEvt = () => {
    this.setState({
      animateDescEvt: true,
      showDescEvt: !this.state.showDescEvt
    })
  }

  render() {
    const animation = (
      this.state.animateDescEvt ? (
        this.state.showDescEvt ?
          'container-desc-evt animation-open-desc-evt':
          'container-desc-evt animation-close-desc-evt'
      ) : 'container-desc-evt'
    )

    return (
      <div className="event">
		    <div className="event-image-container">
			    <img
            className="event-image"
            onLoad={this.handleLoad}
            src={this.props.src}
          />
				</div>
				<div
          className="event-title-container"
          onClick={this.toggleDescEvt}
        >
				  <h3 className="event-title">
            {this.props.event.name}
          </h3>
				</div>
				<div className={animation}>
				  <p className="event-description-text">
            {this.props.event.description}
          </p>
				</div>
			</div>
    )
  }
}
