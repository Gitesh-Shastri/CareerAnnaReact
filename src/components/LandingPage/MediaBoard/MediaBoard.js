import React, { Component } from 'react';
import './MediaBoard.css';

import InputSlider from 'react-input-slider';

class MediaBoard extends Component {
    state = {
        x: 10,
        y: 10
      };
  render() {
    return (
      <div class="MediaBoard">
        <div class="media_box row">
            <div class="col-md-12 mediatab">
                <div class="mediaheading">
                        mediaboard
                    </div>
                        <div class="mediatab_text">the economic times</div>
                    </div>   
                    <div class="col-md-12 readFull">
                        read full article <i class="fa fa-caret-right artcile_fa"></i>
            </div> 
             <div class="col-md-12 readFulltext">
                    Due to the online nature of the program, will I need<br/> to be available online at specific times for my<br/> Certification program.
        </div> 
        </div>  
        </div>
    );
  }
}

export default MediaBoard;
