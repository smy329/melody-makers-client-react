import React, { useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackModal = ({ classId, closeModal }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  //   useEffect(() => {
  //     setIsDisabled(status !== 'denied');
  //   }, [status]);

  const textareaRef = useRef(null);

  const handleSendFeedback = (event) => {
    event.preventDefault();
    const feedbackInputValue = textareaRef.current.value;
    const updateClass = {
      classId: classId,
      feedback: feedbackInputValue,
    };
    alert(classId);
    //axiosSecure.patch('/manage-classes/feedback', updateClass).then((res) => console.log(res.data));
    closeModal();
    textareaRef.current.value = '';
  };

  return (
    <div>
      {/* The button to open modal */}
      {/* <label
        htmlFor="my-modal"
        className={`btn-theme-small ${isDisabled ? 'pointer-events-none btn-theme-gray-small' : ''} `}
      >
        Feedback
      </label> */}
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal">
        <div className="modal-box bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Send Feedback to Instructor</h1>
              <p className="mt-2 text-sm text-gray-400 font-normal dark:text-gray-400">
                Tell the respected instructor why admin declined to class!!
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSendFeedback}>
                <div className="grid gap-y-4">
                  <div>
                    <div className="relative">
                      <textarea
                        ref={textareaRef}
                        rows={6}
                        type="text"
                        id="feedback"
                        name="feedback"
                        className="py-3 px-4 font-normal block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm outline-none"
                        aria-describedby="email-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                      Please include a valid email address so we can get back to you
                    </p>
                    <div className="modal-action">
                      {/* <label htmlFor="my-modal" className="btn-theme-neutral">
                        Close
                      </label> */}
                      <button onClick={closeModal}>Close</button>
                      {/* <label type="submit" className="btn-theme" onClick={handleSendFeedback}>
                        Send Feedback
                      </label> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
