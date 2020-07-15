import ReactPlayer from 'react-player'

class VideoFrame extends React.Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount() {
  }

  render() {
    return <div style={{
      position: 'relative',
      paddingTop: '5%'
    }}>
      <ReactPlayer
        url={this.props.src}
        width='100%'
        height='100%'
        playing={true}
        controls={true}
      />
    </div >
  }
}

export default VideoFrame