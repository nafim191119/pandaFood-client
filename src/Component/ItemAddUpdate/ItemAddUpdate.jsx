import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "./../../hooks/UseAxiosSecure";
import UploadImg from "./../UploadImg/UploadImg";

const ItemAddUpdate = ({ isUpdate, defaultItem }) => {
  const [axiosSecure] = UseAxiosSecure();
  const [priceError, setPriceError] = useState("");
  const [img, setImg] = useState(defaultItem?.image ? defaultItem?.image : "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, recipe, price, image, category } = data;
    const imageFile = image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    let imageData;
    if (imageFile) {
      imageData = await UploadImg(formData);
      console.log(imageData?.data?.display_url);
      setImg(imageData?.data?.display_url);
    }

    const newItem = {
      name,
      price: parseFloat(price),
      recipe,
      category,
      image: imageData ? imageData?.data?.display_url : img,
    };
    // console.log({ newItem }, { img });
    if (!newItem.price) {
      setPriceError("please provide a numeric value!");
    } else {
      setPriceError("");
      {
        isUpdate
          ? axiosSecure
              .patch(`/menu/${defaultItem?._id}`, newItem)
              .then((data) => {
                console.log(data?.data);
                if (data?.data?.acknowledged && data?.data?.modifiedCount > 0) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Updated successfully!",
                    timer: 1500,
                  });
                } else if (data?.data?.acknowledged) {
                  Swal.fire({
                    position: "top-end",
                    icon: "info",
                    title: "Change something else to update!",
                    timer: 2000,
                  });
                }
              })
          : axiosSecure.post("/menu", newItem).then((data) => {
              if (data?.data.acknowledged) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item Added successfully!",
                  timer: 1500,
                });
              }
            });
      }
    }
    console.log(newItem);
  };
  return (
    <div className="flex flex-col bg-base-100 rounded-md md:px-10 w-5/6 mx-auto mb-10">
      <form className="w-5/6 md:w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control px-2 md:px-0 w-full py-10 mb-2">
          <label className="label">
            <span className="label-text">*Item Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            defaultValue={isUpdate ? defaultItem?.name : ""}
            className="input input-bordered w-"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control px-2 md:px-0 flex flex-col md:flex-row ">
          <div className="my-2 mr-3">
            <label className="label">
              <span className="label-text">*Select Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              defaultValue={
                isUpdate ? defaultItem?.category : "select Category"
              }
            >
              <option disabled>select Category</option>
              <option value={"drinks"}>Drinks</option>
              <option value={"dessert"}>Dessert</option>
              <option value={"pizza"}>Pizza</option>
              <option value={"salad"}>Salad</option>
              <option value={"soup"}>Soup</option>
            </select>
            {errors.category && (
              <p className="text-red-600">{errors.category?.message}</p>
            )}
          </div>
          <div className="my-2 md:ml-3">
            <label className="label">
              <span className="label-text">*Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              defaultValue={isUpdate ? defaultItem?.price : ""}
              className="input input-bordered w-full"
            />
            {priceError && (
              <p className="text-red-600 my-1 md:ml-2">{priceError}</p>
            )}
            {errors.price && (
              <p className="text-red-600">{errors.price?.message}</p>
            )}
          </div>
        </div>
        <div className="form-control px-2 md:px-0 my-2">
          <label className="label">
            <span className="label-text">*Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            defaultValue={isUpdate ? defaultItem?.recipe : ""}
            placeholder="Recipe Details"
          ></textarea>
          {errors.recipe && (
            <p className="text-red-600">{errors.recipe?.message}</p>
          )}
        </div>
        <div className="form-control px-2 md:px-0 w-full my-2">
          {isUpdate && (
            <div className="avatar my-5">
              <div className="w-24 rounded-full">
                <img src={img} />
              </div>
            </div>
          )}
          <div>
            <label className="label">
              <span className="label-text">Pick an Image</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full max-w-sm"
            />
            {errors.image && (
              <p className="text-red-600">{errors.image?.message}</p>
            )}
          </div>
        </div>
        <input
          className="w-20 btn btn-outline btn-ghost mt-3 mb-6"
          type="submit"
        />
      </form>
    </div>
  );
};

export default ItemAddUpdate;
