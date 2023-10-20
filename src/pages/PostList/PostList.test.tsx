/** @format */

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostList from ".";
import { renderWithProviders } from "src/utils/test-utils";

const initialPostList = [
  {
    id: "1",
    productId: "1",
    category: "ao",
    name: "ao vip",
    review: "hang dom qua toi khong the su dung",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvUnxfLMLkA3SsNxkVR1UCaDdZHVTQLEBNsQ&usqp=CAU",
  },

  {
    id: "2",
    productId: "13",
    category: "dong ho",
    name: "Rolex Datejust chế tác từ Oystersteel và vàng, M126233-0039 | DAFC Vietnam",
    review:
      "Đồng hồ Rolex Oyster Perpetual Datejust thuộc bộ sưu tập sáng giá và có “tuổi đời” tương đương với thời gian hoạt động của thương hiệu Rolex. Dòng đồng hồ Rolex Datejust được xem là biểu trưng của sự thành công và đẳng cấp, và đó cũng là lý do những chiếc đồng hồ luôn được giới doanh nhân săn đón. \n Rolex là thương hiệu đồng hồ cao cấp đến từ Thụy Sỹ, được giới điệu mộ đánh giá là có tầm ảnh hưởng và khả năng phát triển mạnh mẽ, bền vững trên thế giới.",
    img: "https://rolex.dafc.com.vn/wp-content/uploads/watch-assets-front-facing/landscape_assets/m126233-0039_modelpage_front_facing_landscape.png",
  },
];

test("Render List Route", () => {
  renderWithProviders(<PostList />);
  const cartElement = screen.getByText(/Danh sách Bài viết/i);
  expect(cartElement).toBeInTheDocument();
});

////////////////////////////////
test("Postlist khi có các bài viết", () => {
  renderWithProviders(<PostList />, {
    preloadedState: {
      postReducer: {
        posts: initialPostList,
      },
    },
  });

  const getInputNumber = screen.getAllByRole("h2test");
  expect(getInputNumber).toHaveLength(initialPostList.length);
});

test("Postlist khi có các 1 viết", () => {
  renderWithProviders(<PostList />, {
    preloadedState: {
      postReducer: {
        posts: [initialPostList[0]],
      },
    },
  });

  const getInputNumber = screen.getByRole("h2test");
  expect(getInputNumber.textContent).toBe(initialPostList[0].name);
});
