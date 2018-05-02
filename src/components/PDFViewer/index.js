import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
// import { Document } from 'react-pdf/dist/entry.webpack';

import pdfFile from '../Archives/Who.pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class PDFViewer extends Component {
  state = {
    file: pdfFile,
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

  render() {
    const { file, numPages } = this.state;
    const { title, filePath } = this.props;
    return (
      <div className="Example">
        <header>
          <h1>{title}</h1>
        </header>
        <div className="Example__container">
          <div className="Example__container__document">
            <Document
              file={file}
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


// export default PDFViewer;
