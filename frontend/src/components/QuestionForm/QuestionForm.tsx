import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Progress } from "antd";
import AxiosService from "../../services/https.service";
import { backend_routes } from "../../utils/backend_routes";
import { IQuestionAndAnswer } from "../../models/IQuestionAndAnswer.model";
import { useAppDispatch } from "../../store/redux-hooks/redux-hooks";
import { updateQuestionAndAnswer } from "../../store/slice/questionAndAnswerSlice";
import { ErrorBoundary } from "react-error-boundary";
import FallBack from "../FallBack/FallBack";

const QuestionForm = () => {
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [fileUploadProgress, setFileUploadProgress] = useState<number>(0);
  const [questionFormData, setQuestionFormData] = useState({
    question: "",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFileIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setIsFileUploading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      AxiosService()
        .post(backend_routes.uploadFile, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            if (event.total) {
              const percent = Math.round((event.loaded * 100) / event.total);
              setFileUploadProgress(percent);
            }
          },
        })
        .then((response) => {
          const fileQuestionAndAnswer: IQuestionAndAnswer = response.data;
          setIsFileUploading(false);
          dispatch(updateQuestionAndAnswer(fileQuestionAndAnswer));
        })
        .catch((err) => {
          setIsFileUploading(false);
          console.log(err);
        });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AxiosService()
      .post(backend_routes.question, questionFormData)
      .then((response) => {
        const questionAndAnswer: IQuestionAndAnswer = response.data;
        dispatch(updateQuestionAndAnswer(questionAndAnswer));
        console.log(questionAndAnswer);
        setQuestionFormData({ question: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onHandleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuestionFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <ErrorBoundary fallback={<FallBack />} onError={(err) => console.log(err)}>
      <div className="bottom-0 flex items-center justify-between w-full p-3 bg-[#F4F4F4] relative">
        {/**file upload */}
        <div>
          <input
            className="hidden"
            type="file"
            accept=".doc, .docx, .xlsx, .xls, .pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {isFileUploading ? (
            <Progress
              size={"small"}
              type="circle"
              percent={fileUploadProgress}
            />
          ) : (
            <Icon
              data-testid="upload-icon"
              className="cursor-pointer"
              onClick={handleFileIconClick}
              icon={"ri:attachment-line"}
              fontSize={32}
            />
          )}
        </div>

        {/**form input */}
        <form onSubmit={handleSubmit} className="flex items-center w-full ml-3">
          <input
            name="question"
            onChange={onHandleQuestionChange}
            value={questionFormData.question}
            placeholder="Enter your question..."
            autoComplete="off"
            className="flex-grow p-2 border-none rounded text-lg"
          />
          <button
            disabled={questionFormData.question === ""}
            type="submit"
            className={`ml-2 cursor-pointer outline-none border-none ${
              questionFormData.question === ""
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <Icon
              icon={"fa:arrow-up"}
              fontSize={32}
              color={questionFormData.question === "" ? "white" : "black"}
            />
          </button>
        </form>
      </div>
    </ErrorBoundary>
  );
};

export default QuestionForm;
