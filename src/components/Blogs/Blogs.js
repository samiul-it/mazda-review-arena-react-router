import React from 'react';

const Blogs = () => {
    return (
      <div>
        <div className="questions">
          <div className="ques1">
            <h3>Q: What is Context API?</h3>
            <p>
              In React JS data is passed to one component to another component
              through props. But when the the number of child becomes
              larger,data is passed to other childs through routes to
              corresponding parents.Context api provides a easier way to pass
              data using react useContext and we can choose consumer for the
              data and then wrap inside provider.
            </p>
          </div>
          <div className="ques2">
              <h3>Q:What Semantic Tag in HTML?</h3>
                    <p>HTML semaantic tags are used to make easy understandable to developers.Semantic tag elementsare easy to understand. For an example "header" ta is used to show header information at UI.Semantic tags are unleashed at the release of HTML Version 5. Some common semantic tags are article, header, aside, small etc.

                    </p>
          </div>
          <div className="ques3">
              <h3>Q:Inline,Block and inline-block difference</h3>
              <p>Inline Block vs Inline-Block elements.
                Inline elemets are some elements that holds a place at corresponding line. For an 
                example span tag is an inline element,it can take a place at anyline,and does not
                require any block space.
                Block elements take a block space while rendering, Usually block level elements 
                take the full available width. h1 div etc are block level elements.
                inline-block elements are inline elements but display/acts like block elements.
                Span can be a inline-block element</p>

          </div>
        </div>
      </div>
    );
};

export default Blogs;