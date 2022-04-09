import "../App.css";
import Detail from "../components/Detail";
import Heading from "../components/Heading";
import TransitionButton from "../components/PageTransitionButton";
import FinalLineIcon from "../constants/icons/finalLineIcon";
import AllQuestionsLineIcon from "../constants/icons/allQuestionLineIcon";

function ConclusionPage() {
  return (
    <div className="conclusionPage">
      <div>
        <div headline="Final" />
        <FinalLineIcon />
        <Detail contents="Points:129" />
        <Detail contents="Questions:10" />
        <Detail contents="Correct Answers:8" />
        <TransitionButton name="Restart" />
      </div>

      <div>
        <Heading headline="All Questions" />
        <AllQuestionsLineIcon />
        <Detail></Detail>
      </div>
    </div>
  );
}
export default ConclusionPage;
