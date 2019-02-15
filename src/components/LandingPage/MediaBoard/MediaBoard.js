import React, { Component } from 'react';
import './MediaBoard.css';

import Card from './Card/Card';

class MediaBoard extends Component {
    state = {
        medias: [
          {
            image_url: "http://www.upstart.net.au/wp-content/uploads/2017/07/The-CEO-Magazine-1.jpg",
            title: "Career Anna Creates Job Oriented Education Ecosystem",
            description: "Students come from different backgrounds in India. To be job-ready in this competitive age, everyone has to go through certain challenges. They need someone to guide them throughout the preparation process. Career Anna has strong mentorship program on board where credible experts come forward to help students get through the exams. ",
            index: 0
          },
          {
            image_url: "http://www.michaelleestallard.com/wp-content/uploads/Economic-Times-Logo.png  ",
            title: "Online learning platform Career Anna raises Rs 3 Cr funding",
            description: "Video-driven online learning platform Career Anna has raised Rs 3 crore structured financing from a group of angel investors represented by Subinder Khurana....",
            index: 1
          },
          {
            image_url: "https://www.igotgarbage.com/wp-content/uploads/2017/06/your-story.png",
            title: "Video-based learning platform Career Anna raises funding of Rs 3 Cr",
            description: "The company aims to utilise the funds to launch a series of PRO Degree online learning programmes on artificial intelligence, data science, machine learning, deep learning, DevOps and other new-age technologies that have an increasing demand in the market.",
            index: 2
          },{
            image_url: "data:image/jpeg;base64,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",
            title: "CareerAnna raised INR 3 crore structured financing from a group of angel investors",
            description: "Career Anna, a leading curated learning platform has raised INR 3 crore structured financing from a group of angel investors represented by Subinder Khurana. Funds will be used to launch a series of PRO Degree online learning programs on Artificial Intelligence, Data Science, Machine Learning, Deep Learning, DevOps and other new-technology fields where demand for talent far exceeds supply.",
            index: 3
          },
          {
            image_url: "https://d33wubrfki0l68.cloudfront.net/31e1b7b37a73b1c50eaff730b9109e6c23630d5c/1d636/images/logos/bw-disrupt.png",
            title: "Learning Platform Career Anna Raises Rs 3 Cr from a Group of Angel Investors",
            description: "Founded in 2014, Career Anna is on the mission to empower over 500 million students and professionals across India and emerging countries, with opportunities and skills in high growth careers of their choice.",
            index: 4
          },
        ],
        media: {
          image_url: "http://www.upstart.net.au/wp-content/uploads/2017/07/The-CEO-Magazine-1.jpg",
          title: "Career Anna Creates Job Oriented Education Ecosystem",
          description: "Students come from different backgrounds in India. To be job-ready in this competitive age, everyone has to go through certain challenges. They need someone to guide them throughout the preparation process. Career Anna has strong mentorship program on board where credible experts come forward to help students get through the exams. ",
          index: 0
        },
    }


    nextProperty = () => {
      console.log(this.state.media.index);
      if(this.state.media.index != this.state.medias.length-1) { 
      if(this.state.media.index != undefined){
       const newIndex = this.state.media.index+1;
        this.setState({
          media: this.state.medias[newIndex]
    })
  }
  }
}

timer() {
  console.log(this.state.media.index);
  if(this.state.media.index == this.state.medias.length-2) { 
      this.setState({
          media: this.state.medias[0]
      })
  } else {
  this.setState({
      media: this.state.medias[this.state.media.index+1]
  })
}
}
componentDidMount() {
  this.intervalId = setInterval(this.timer.bind(this), 5000);
}
componentWillUnmount(){
  clearInterval(this.intervalId);
}

prevProperty = () => {    
  const newIndex = this.state.media.index-1;
  this.setState({
    media: this.state.medias[newIndex]
  })
}

  render() {

    const medias = this.state.medias;
    const media = this.state.media;

    return (
      <div class="MediaBoard">
        <div className="row">
          <div className="col-md-3 mediatext">
            media<span>board</span>
          </div>
          <div className="col-md-12 medias_playlist_wrapper">
            <div className="medias_playlist" style={{
				'transform': `translateX(-${media.index*(100/medias.length)}%)`
			}}>
              {
                medias.map((media_item, i) => 
                  <Card key={i} medias={media_item} current_index={media.index}/>)
              }
          </div>
          </div>
          <div className="col-md-12 media_board_arrow">
          <button 
                    class="next_video_prev"
                    onClick={() => this.prevProperty()} 
                    disabled={media.index==0}
                    hidden={media.index==0}
                ><i class='fa fa-angle-left'></i></button>
             
                <button 
                class="next_video_right" 
               onClick={() => this.nextProperty()}
               disabled={media.index==medias.length-2}
               hidden={media.index==medias.length-2}
               ><i class='fa fa-angle-right'></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaBoard;
