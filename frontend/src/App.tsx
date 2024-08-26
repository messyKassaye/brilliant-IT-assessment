import Header from "./components/Header/Header";
import QuestionAndAnswer from "./components/QuestionAndAnswer/QuestionAndAnswer";
import QuestionForm from "./components/QuestionForm/QuestionForm";

function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-start justify-between md:w-[800px] w-full shadow-md h-full relative">
        <Header />
        <div className="flex flex-col flex-grow w-full">
          <QuestionAndAnswer />
        </div>
        <QuestionForm />
      </div>
    </div>
  );
}

export default App;
