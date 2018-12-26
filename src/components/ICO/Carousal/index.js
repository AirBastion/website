import React, { Component } from 'react'
import './index.css'

class Carousal extends Component {
  render() {
      let {slides, carousalClick, selectIndex} = this.props;
    return (
        <div className='carousal'>
            <div id='project-list'>
               {
                   slides.map((item,index)=>
                   {
                    let selectedDiv = index === selectIndex ? "list-items-horizontal" :"list-items";
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