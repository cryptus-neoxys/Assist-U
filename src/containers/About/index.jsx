import React from "react";
import { AboutWrapper } from "./style";
export const About = () => {
  return (
    <div>
      <AboutWrapper>
        <div className='heading'>About</div>
        <div className='wrapp'>
          <h1>What is Autism?</h1>
          <p>
            Autism is a complicated condition that includes problems with
            communication and behaviour. It can involve a wide range of symptoms
            and skills. ASD can be a minor problem or a disability that needs
            full-time care in a special facility. People with autism have
            trouble with communication. They have trouble understanding what
            other people think and feel. This makes it hard for them to express
            themselves, either with words or through gestures, facial
            expressions, and touch.
          </p>
          <h1>How does our application help those children ?</h1>
          <p>
            We built a web application to help children with Autism learn
            Mathematics, Communication skills and help them understand emotions
            using a facial expression recognition system using a deep learning
            module with a train accuracy of 95%.
          </p>
          <h1>What problem does our application solve ?</h1>
          <p>
            ✔ Analyzing Emotions <br /> - For those children who possess the
            intellectual capacity to function in the general class, speech and
            language skills can still present a number of obstacles. They may
            have problems expressing their own emotions and feelings as well
            perceiving and knowing how to respond to those of others. This can
            be as extreme as lacking the ability to recognize faces and
            differentiate between different people, or as subtle as lacking the
            ability to appreciate and make use of nuance and tone of voice when
            communicating. The application help understand emotion of the
            patient using a facial expression recognition system , which is a
            deep learning module built using Tensorflow keras. <br /> ✔
            Improving Cognitive Skills <br /> - Processing delays have little do
            to with the capacity to incorporate and evaluate observations and
            ideas. Delays in the ability to process verbal or written language
            have a neurological basis. For those individuals who suffer delays,
            facts, ideas, and questions are often delayed or even lost in
            translation from language to thought and vice-versa. Therefore our
            application has a interactive interface which makes learning process
            for the children.
          </p>
        </div>
      </AboutWrapper>
    </div>
  );
};
