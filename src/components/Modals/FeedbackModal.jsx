import React, { useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackModal = ({ classId, closeModal }) => {
  console.log('hi', classId);
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
    console.log(classId, feedbackInputValue);
    axiosSecure.patch('/manage-classes/feedback', updateClass).then((res) => console.log(res.data));
    closeModal();
    textareaRef.current.value = '';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-white w-2/5 shadow p-10 rounded-xl">
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
                    required
                  />
                </div>
                <div className="flex justify-end mt-4 gap-5">
                  <button className="btn-theme-neutral" onClick={closeModal}>
                    Close
                  </button>
                  <button className="btn-theme" onClick={handleSendFeedback}>
                    Submit Feedback
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
