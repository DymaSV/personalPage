import ReactPlayer from 'react-player'

class VideoFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ height: window.innerHeight - 20 });
  }

  render() {
    return <div style={{
      position: 'relative',
    }}>
      <ReactPlayer
        url={this.props.src}
        width='100%'
        height={this.state.height}
        playing={true}
        controls={true}
      />
    </div >
  }
}

export default VideoFrame