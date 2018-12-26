import React, { Component } from 'react'
import './index.css'

class Carousal extends Component {
  render() {
      let {slides, carousalClick, selectIndex} = this.props;
      console.log("selectIndex----------from carousal component-----", this.props.selectIndex)
      
    return (
        <div className='carousal'>
            <div id='project-list'>
               {
                   slides.map((item,index)=>
                   {
                    let selectedDiv = index === selectIndex ? "list-items-horizontal" :"list-items";
                    return(
                    <div 
                        onClick={()=>carousalClick(index)} 
                        key={"nav-"+index}
                        className={selectedDiv}>|
                     {/* <span key={"line"+index} id={"line"+index}>{"#"+(index+1)}</span> */}
                            {/* <span 
                            id={"bar"+index}
                            key={"bar"+index}>{index+1}
                            </span> */}
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