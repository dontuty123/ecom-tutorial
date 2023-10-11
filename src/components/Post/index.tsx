/** @format */

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "src/redux/store";
import { PostType } from "src/types/post.type";

export default function Post() {
  const { product, id } = useParams();
  const posts = useSelector((state: RootState) => state.postReducer.posts);

  var curPost: PostType[];

  if (product) {
    curPost = posts.filter((item) => item.productId === id);
  } else curPost = posts.filter((item) => item.id === id) as PostType[];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Chi tiết Bài viết
      </h1>
      {curPost.map((item) => (
        <div
          className="bg-white rounded-lg shadow-md p-6 overflow-hidden mb-10"
          key={item.id}
        >
          <div className="w-[50%] h-[50vh] mb-10">
            <img
              alt={item?.name}
              src={item?.img}
              className="w-full h-full mb-4 rounded-2xl shadow object-cover"
            />
          </div>

          <h2 role="item-name" className="text-xl font-semibold text-gray-800">
            {item?.name}
          </h2>
          <p role="item-review" className="text-gray-600 mt-2 max-w-[70%]">
            {item?.review}
          </p>
        </div>
      ))}
    </div>
  );
}
