import axios from "axios";
const imgToken = import.meta.env.VITE_image_upload_token;

const UserUploadImg = async (formData) => {
  console.log(formData);
  const imgUrl = `https://api.imgbb.com/1/upload?key=${imgToken}`;
  const res = await axios.post(imgUrl, formData);
  console.log(res.data);
  return res.data;
};

export default UserUploadImg;
