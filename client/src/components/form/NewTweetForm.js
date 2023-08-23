import React, { useState } from "react"; // Add useState import
import getFormData from "../../utils/getFormData";
import { useSelector, useDispatch } from "react-redux";
import { RiFileGifLine, GrEmoji, FiImage } from "react-icons/all";
import Avatar from "../avatar/Avatar";
import TextareaAutosize from "react-textarea-autosize";
import { newTweet, newRetweet } from "../../redux/actions/tweetActions";


const NewTweetForm = () => {
  const { username, avatar } = useSelector(
    (state) => state.currentProfile.data
  );
  const dispatch = useDispatch();
  
  const [selectedImage, setSelectedImage] = useState(null); // Add state for selected image
  
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    formData.image = selectedImage; // Add selected image to form data
    dispatch(newTweet(formData));
    e.target.reset();
    setSelectedImage(null); // Reset selected image state
  };

  return (
    <div className="tweet-form display-flex align-items-fs">
      <div className="tweet-form__img display-flex justify-content-c align-items-c">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize name="body" placeholder="What's happening?" />
        
        <div className="display-flex justify-content-sb align-items-c">
          <ul className="display-flex">
            <li>
            <label htmlFor="imageUpload">
              <FiImage />
            </label>
            <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange} // Handle image selection
                  style={{ display: "none" }} // Hide the input visually
                  />
            </li>
            <li>
              <RiFileGifLine />
            </li>
            <li>
              <GrEmoji />
            </li>
          </ul>
          <button className="tweet-form__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default NewTweetForm;
