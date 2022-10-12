import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="question-container">
      <div className="question">
        <img src="/photos/useRef.png" alt=""></img>
        <div className="activity-info">
          <p className="activity-name">
            What is useref and how it does work in react?
          </p>

          <p>
            The useRef Hook allows us to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly. If we
            tried to count how many times our application renders using the
            useState Hook, we would be caught in an infinite loop since this
            Hook itself causes a re-render. To avoid this, we can use the useRef
            Hook. The useRef Hook can also be used to keep track of previous
            state values.
          </p>
        </div>
      </div>
      <div className="question">
        <img src="/photos/contextAPI.png" alt=""></img>
        <div className="activity-info">
          <p className="activity-name">How does context api works?</p>
          <p>
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level. In a
            typical React application, data is passed top-down (parent to child)
            via props, but such usage can be cumbersome for certain types of
            props (e.g. locale preference, UI theme) that are required by many
            components within an application. Context provides a way to share
            values like these between components without having to explicitly
            pass a prop through every level of the tree.
          </p>
        </div>
      </div>
      <div className="question">
        <img src="/photos/react-router.jpg" alt=""></img>
        <div className="activity-info">
          <p className="activity-name py-3">
            What is the purpose of react router?
          </p>

          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route. React Router isn't
            just about matching a url to a function or component: it's about
            building a full user interface that maps to the URL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
