import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Question from "./Question/Question";

const Blog = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("qA.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <section className="my-5">
      <Container>
        <h4 className="mb-5 text-center text-primary text-uppercase">
          Questions And Answers
        </h4>
        <div>
          {questions.map((question) => (
            <Question key={question.id} qAData={question}></Question>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
