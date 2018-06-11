import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import sizeMe from 'react-sizeme';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

class PDFViewer extends Component {
  state = {
    file: '',
    numPages: null,
  }

  onFileChange = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoadSuccess = ({ numPages }) =>
    this.setState({
      numPages,
    })

  displayError = () => {

  }

  render() {
    const { numPages } = this.state;
    //const { title, filePath } = this.props;
    const { title, filePath, size } = this.props;
  
    //this.props.onUpdateHeight(size);
    return (
      <div className="Example">
        <header>
          <h1>{title}</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__document">
            <Document
              file={filePath}
              onLoadSuccess={this.onDocumentLoadSuccess}
              options={options}
            >
              {
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      scale={1.5}
                    />
                  ),
                )
              }
            </Document>
          </div>
        </div>
      </div>
    );
  }
}


export default sizeMe()(PDFViewer);
