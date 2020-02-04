import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight;

    const imageSpans = Math.ceil(imageHeight / 10);

    this.setState({ imageSpans });
  };

  render() {
    // destructure props to avoid repeating this.props.image
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.imageSpans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
