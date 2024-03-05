import React from "react";
import '../sass/QuestionForm.css';

export default function QuestionForm({title,subTitle,background}) {
  const titleStyle = {
    textAlign: 'center',
    fontSize: '1.6rem',
    marginBottom: '5px',
  };
  const subTitleStyle = {
    textAlign: 'center',
    color: 'rgb(230,0,0)',
    fontSize: '1rem',
    fontWeight: 'normal',
    marginTop: '0',
  };
  const sectionStyle = {
    background: background ? background : 'white',
    padding: 20,
  };
  const formStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    width: '90%',
    gap: '20px 40px',
  };
  const btnStyle = {
    gridArea: '3 / 1 / 3 / 4',
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <>
      <section className="question-form" style={sectionStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={subTitleStyle}>{subTitle}</h2>
        <form action="#" style={formStyle}>
          <input name="name" placeholder="您的姓名" type="text" required
          className="question-form-input"/>
          <input name="phone" placeholder="您的电话号码" type="number" required
          className="question-form-input"/>
          <input name="email" placeholder="您的邮箱" type="email" required
          className="question-form-input"/>
          <textarea name="content" type="text" placeholder="您的留言内容"
          required className="question-form-area" maxLength={255}/>
          <div style={btnStyle}>
            <button type="submit" className="question-form-button">
              立即提交</button>
          </div>
        </form>
      </section>
    </>
  );
}