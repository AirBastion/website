import React, { Component } from 'react'
import './index.css'

class Carousal extends Component {
    constructor(props) {
        super(props);
    this.lastSlide = false;
    }
  render() {
      let {slides, carousalClick, selectedIndex} = this.props;
      let selectedDiv;
    this.lastSlide = (slides.length-1 === selectedIndex) ? true : false;

    return ( 
        <div className='carousal'>
            <div id='project-list'>
               {
                   slides.map((item,index)=>
                   {
                    (this.lastSlide)
                    ? selectedDiv = index === selectedIndex ? "list-items-horizontal-last":"list-items-last":
                      (selectedDiv = index === selectedIndex ? "list-items-horizontal" :"list-items"); 
                    return(
                            <div 
                                onClick={ ()=> carousalClick(index)} 
                                key={"nav-"+index}
                                className={selectedDiv}>
                                    <span 
                                        id={"bar"+index}
                                        key={"bar"+index}>
                                        {"#"+(index+1)}
                                    </span>
                                    |
                            </div>
                        )
                   }
                   )
               }
            </div>
        </div>
    );
  }
}

export default Carousal;