/** @format */

import { useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "src/redux/store";
import { PostType } from "src/types/post.type";

export default function PostList() {
  const posts = useSelector((state: RootState) => state.postReducer.posts);
  const [postList, setPostList] = useState<PostType[]>(posts);
  const navigate = useNavigate();

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    var curPostList: PostType[] = [];
    const selectedValue = event.target.value;
    navigate("/post/category/" + selectedValue);

    switch (selectedValue) {
      case "all":
        curPostList = posts;
        break;
      case "ao":
        curPostList = posts.filter((item) => item.category == "ao");
        break;
      case "quan":
        curPostList = posts.filter((item) => item.category == "quan");
        break;
      case "dong ho":
        curPostList = posts.filter((item) => item.category == "dong ho");
        break;
      case "o to":
        curPostList = posts.filter((item) => item.category == "o to");
        break;
    }
    setPostList(curPostList);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">
        Danh sách Bài viết
      </h1>
      {/* Dropdown danh mục */}
      <div className="mb-4">
        <label htmlFor="category" className="text-gray-600">
          Chọn Danh mục:
        </label>
        <select
          id="category"
          className="block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 max-w-sm"
          onChange={handleCategory}
        >
          <option value="all">Tất cả</option>
          <option value="ao">Review Áo</option>
          <option value="quan">Review Quần</option>
          <option value="o to">Review Xe Hơi</option>
          <option value="dong ho">Review Đồng Hồ</option>
          {/* Thêm các tùy chọn danh mục khác ở đây */}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Mỗi card bài viết */}
        {postList.map((item) => (
          <div className="bg-white rounded-lg shadow-md" key={item.id}>
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {item.name}
              </h2>
              <p className="text-gray-600 mt-2 truncate">{item.review}</p>
              <Link
                to={`/post/${item.id}`}
                className="block mt-2 text-blue-600 hover:underline"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
