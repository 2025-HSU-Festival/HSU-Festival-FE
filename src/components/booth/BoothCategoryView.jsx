import React, { useEffect, useState } from "react";

// styles
import * as S from "../../styles/booth/booth.styles";

// components
import BoothItem from "./BoothItem";

export default function BoothCategoryView({
  selectedCategory,
  setSelectedCategory,
  selectedMarker,
}) {
  const categoryList = ["체험부스", "푸드트럭", "프로모션"];
  const [boothData, setBoothData] = useState([
    {
      id: 1,
      name: "부스 이름",
      time: "부스 시간",
      description: "부스 설명",
      imageUrl: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "부스 이름",
      time: "부스 시간",
      description: "부스 설명",
      imageUrl: "https://via.placeholder.com/80",
    },
  ]);

  /*   useEffect(() => {
    const fetchBoothData = async () => {
      try {
        const response = await axios.get(
          `/api/booths?category=${selectedCategory}`
        );
        setBoothData(response.data.data);
      } catch (error) {
        console.error("부스 데이터를 불러오는데 실패했습니다:", error);
      }
    };

    if (selectedCategory) {
      fetchBoothData();
    }
  }, [selectedCategory]); */

  return (
    <S.BoothCategoryViewLayout>
      <S.CategoryListContainer>
        {categoryList.map((category) => (
          <S.CategoryItem
            key={category}
            onClick={() => setSelectedCategory(category)}
            selected={selectedCategory === category}
          >
            {category}
          </S.CategoryItem>
        ))}
      </S.CategoryListContainer>

      <S.BoothListContainer>
        {boothData.map((booth) => (
          <BoothItem
            key={booth.id}
            booth={booth}
            selectedMarker={selectedMarker}
          />
        ))}
      </S.BoothListContainer>
    </S.BoothCategoryViewLayout>
  );
}
