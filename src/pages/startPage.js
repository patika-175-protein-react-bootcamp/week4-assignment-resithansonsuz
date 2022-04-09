import "../App.css";
import Detail from "../components/Detail";
import Heading from "../components/Heading";
import TransitionButton from "../components/PageTransitionButton";
import StartLineIcon from "../constants/icons/startLineIcon";

function StartPage() {
  
  return (
    <div className="startPage">
      <header>
        <Heading headline="Mathematics Game" />
      </header>
      <nav className="StartLine">
        <StartLineIcon />
      </nav>
      <section>
        <Detail contents="Total Point: 129" />
        <Detail contents="Total Questions: 40" />
        <Detail contents="Correct Answers: 32" />
      </section>
      <footer>
        <TransitionButton name="Start" />
      </footer>
    </div>
  );
}
export default StartPage;
