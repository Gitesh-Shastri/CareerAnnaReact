import React, { Component } from "react";

import "./FAQ.css";

class FAQ extends Component {

    constructor(props){
		super(props);
		this.state = {
            questions: [
                {
                ques:"Q1: What is CAT Exam for?",
                ans: "<p>CAT is one of the most popular entrance exams for admission into India’s top Business schools like the IIMs. Its score is considered for selection by a lot of other colleges also.</p>",
                index: 0
            },{
                ques:"Q2: What is CAT Eligibility Criteria 2019?",
                ans: "<p>To appear for the CAT exam, a candidate should have at least 50% marks or equivalent GPA in graduation or a professional degree.<br/> Final year students are also eligible to apply for CAT Exam. So, if you will graduate in 2020, you can appear for CAT 2019 exam.</p>",
                index: 1
            },{
                ques:"Q3: What is IIM Selection Criteria through CAT 2019 Score?",
                ans: "<p>CAT score is the most important criteria for selection at IIMs. In addition to CAT 2019 Score, IIMs will also consider Academic Background, Marks of class 10, 12 and graduation, Work Experience, Gender and Caste for giving WAT PI Shortlist.</p>",
                index: 2
            },{
                ques:"Q4: If you get a good score, is the selection automatic in top B-schools?",
                ans: "<p>No. By applying for CAT, you automatically apply to the IIMs but you need to apply to"+
                "other colleges separately. Also, this is just one of the steps in selection for top B-schools.<br/>"+
                "Most of them also have a Written Ability Test / Group Discussion / Personal Interview round"+
                "as well.</p>",
                index: 3
            },{
                ques:"Q5: What are the CAT 2019 Important Dates?",
                ans: "<p>The application process starts around July end.<br/>"+ 
                "You can typically apply till mid-September. <br/>"+
                "The exam is conducted in November end.<br/>"+
                "The results are declared in January of the following year.<br/>"+
                "After that, the selection process continues till March-April for most B-schools.</p>",
                index: 4
            },{
                ques:"Q6: How long is the CAT exam?",
                ans: "<p>3 hours</p>",
                index: 5
            },{
                ques:"Q7: How many sections are there in CAT 2019 exam?",
                ans: "<p>Three. <br/>"+
                "1. Verbal Ability and Reading Comprehension (VA &amp; RC)<br/>"+
                "2. Logical Reasoning and Data Interpretation (LR &amp; DI)<br/>"+
                "3. Quantitative Ability (QA)</p>",
                index: 6
            },{
                ques:"Q8: How many questions will be there in CAT 2019 exam?",
                ans: "<p>100 <br/>"+
                "VA &amp; RC will have 34 questions.<br/>"+
                "LR &amp; DI will have 32 questions.<br/>"+
                "Quantitative Aptitude will have 34 questions.</p>",
                index: 7
            },{
                ques:"Q9: Is there a fixed time allocated per section in the CAT 2019 exam?",
                ans: "<p>Yes. 1 hour per section<br/>"+
                "This means that you will not be allowed to jump from one section to another. If you finish a section in less than 1 hour, you will have to sit and wait. If you are taking more than 1 hour"+
                "to finish a section, the answer sheet / your responses will be automatically submitted.</p>",
                index: 8
            },{
                ques:"Q10: How much do you need to score to get selected in India’s top Business schools?",
                ans: "<p>98%ile and above for top B-schools (IIMs, FMS)<br/>"+
                "95%ile to 98%ile for good B-schools (NITIE, MDI, IITs)<br/>"+
                "90%ile to 95%ile for decent B-schools (IMT, IMI, DSE, TAPMI, XIMB, KJ Somaiya)<br/>"+
                "Apart from IIMs, FMS, SPJain Mumbai and NITIE Mumbai, no other major B School has"+
                "sectional cutoff as well.<br/><br/>You can find past data of <a href=\"https://www.careeranna.com/articles/cat-2018-score-vs-percentile/\">Score vs Percentile</a> here.</p>",
                index: 9
            },{
                ques:"Q11: Will there be an on-screen calculator in the CAT 2019 exam?",
                ans: "<p>Yes.</p>",
                index: 10
            },{
                ques:"Q12: What will be the marking scheme in CAT 2019?",
                ans: "<p>3 marks for each correct answer.<br/>-1 for each incorrect answer (objective questions)<br/>0 for each incorrect answer (TITA questions)<br/>0 for each question that you did not attempt<br/>TITA stands for ‘Type in the Answer’. In some questions, you will need to type the answer and not select it from options.",
                index: 11
            },{
                ques:"Q13: What is the syllabus for CAT 2019 Exam?",
                ans: "<p>Please check complete and official <a href=\"https://www.careeranna.com/articles/cat-syllabus/\">CAT Syllabus</a> for CAT 2019 Exam</p>",
                index: 12
            },{
                ques:"Q14: What are some of the recommended books / material to prepare for the CAT exam?",
                ans: "<p>You can use books from Tata McGraw Hill, Pearson, or Arihant.<br/>You can use material from IMS / TIME / Career Launcher.<br/>A detailed analysis can be found here: <a href=\"https://www.careeranna.com/articles/books-to-prepare-for-cat/\">Recommended Books for CAT Exam Preparation</a></p>",
                index: 13
            },
        ],
            particular_ques: {
                ques:"Q1: What is CAT Exam for?",
                ans: "<p>CAT is one of the most popular entrance exams for admission into India’s top Business schools like the IIMs. Its score is considered for selection by a lot of other colleges also.</p>",
                index: 0
            },
            activeIndex: 0
		}
	}

    handleClick(index, props) {
        console.log(index);
        this.setState({ activeIndex: index,  particular_ques: this.state.questions[index]});
      }

  render() {

    const particular_ques = this.state.particular_ques;
    const questions = this.state.questions;
    
    return (<section class="faq">
        <div className="row">
            <div className="col-md-4 col-xs-12">
                <div className="faq_asked">Frequenty Asked </div>
                <div className="questions">Questions</div>
                <div className="block"></div>
                <div className="answer">
                    <div className="ans">Ans.</div>
                    <div className="full_answer">
                        <div dangerouslySetInnerHTML={{ __html:particular_ques.ans}} />
                    </div>
                </div>
            </div>
            <div className="col-md-8 col-xs-12">
            {
                questions.map((question, i) => {
                const className = this.state.activeIndex === i ? 'question active' : 'question'; 
                return <div className={className} key={i} 
                onClick={this.handleClick.bind(this, i, this.props)}>
                    {question.ques}
                </div>;
            }, this )
        }
            </div>
        </div>
    </section>
    );
  }
}
export default FAQ;
