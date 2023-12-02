import "./Home.css";
import "./Root.css";
import "./Button.css";
import "./Span.css";
import "./Anchor.css";

export default function Home() {
  return (
    <div id="home">
      <div className="container">
        <button className="t-btn">Button</button> &nbsp;&nbsp;
        <button className="t-btn t-btn-primary">Button-Primary</button>
      </div>

      <div className="container">
        Hey, yeah, I'm the <span className="highlight-text">BEST</span>!
      </div>

      <div className="container">
        Here's my{" "}
        <a className="highlight-link" href="https://github.com/Thili-126">
          GitHub link
        </a>
      </div>
    </div>
  );
}
