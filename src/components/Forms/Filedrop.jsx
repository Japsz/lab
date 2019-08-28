import React, {Component} from 'react';

class Filedrop extends Component {
  constructor (props) {
    super(props)
    this.state = { hightlight: false, spanText: this.props.placeholderText}
    this.fileInputRef = React.createRef();
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }
  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;

    if (this.props.onFilesAddedCb) {
      const array = this.fileListToArray(files);
      this.props.onFilesAddedCb(array[0]);
      // eslint-disable-next-line no-unused-expressions
      array.length > 0 ? this.setState({spanText: array[0].name}) : this.setState({spanText: this.props.placeholderText})
    }
  }
  onDragOver(evt) {
    evt.preventDefault()

    if (this.props.disabled) return

    this.setState({ hightlight: true })
  }

  onDragLeave() {
    this.setState({ hightlight: false })
  }

  onDrop(event) {
    event.preventDefault()

    if (this.props.disabled) return

    const files = event.dataTransfer.files
    if (this.props.onFilesAddedCb) {
      const array = this.fileListToArray(files)
      this.props.onFilesAddedCb(array[0])
      // eslint-disable-next-line no-unused-expressions
      array.length > 0 ? this.setState({spanText: array[0].name,hightlight: false}) : this.setState({spanText: this.props.placeholderText ,hightlight: false})
    } else this.setState({ hightlight: false })
  }
  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }
  render() {
    return (
      <div
        onClick={this.openFileDialog}
        className={`upload-link ${this.state.hightlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <img src="/assets/img/lab/LAB_subir.png" className='img_40' alt="Subir Archivo" style={{display: 'inline'}}/>
        <input type="file" style={{display: 'none'}} ref={this.fileInputRef} onChange={this.onFilesAdded} />
        <span id='fileUploadText'>
          {this.state.spanText}
        </span>
      </div>
    );
  }
}

export default Filedrop;