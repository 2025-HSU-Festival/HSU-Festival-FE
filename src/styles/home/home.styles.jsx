import styled from "styled-components";
import colors from "../../styles/common/colors";

export const HomeLayout = styled.div`
  width: 100%;
`;

export const FestivalMainBanner = styled.div`
  width: 100%;
  height: auto;
`;

export const FestivalMainBannerImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;

  object-fit: cover;
  display: block;

  @media (max-width: 390px) {
    height: calc(229px * (100vw / 390));
  }
`;

export const MainContentContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: ${colors.white};
  transition: all 0.3s ease-in-out;

  ${({ $isFixed }) =>
    $isFixed &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    height: 100vh;
    overflow-y: auto;
  `}
`;

export const ChatbotButton = styled.button`
  position: fixed;
  bottom: calc(8vh + 16px); // 바텀 네비게이션 높이(8vh) + 여백
  right: 16px;
  width: 60px;
  height: 60px;

  cursor: pointer;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  // 최대 너비 420px 내에서만 표시되도록 설정
  @media screen and (min-width: 420px) {
    right: calc((100vw - 420px) / 2 + 16px);
  }
`;

// 공지확인하러가기, 사이트정보 포함
export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 2.5vh;
`;

// TimeTable.jsx
export const TimeTableLayout = styled.div`
  width: 100%;
  min-height: 28.22vh; // 최소 높이 보장
  /* height: calc(
    100vh - 8vh - 4vw
  ); // 전체 높이에서 바텀 네비(8vh)와 패딩(2vw * 2) 제외
  max-height: calc(100vh - 8vh - 4vw); */
  display: flex;
  flex-direction: column;
  gap: 1.6vh;
  align-items: center;
`;

// 요일 바
export const DateSelector = styled.div`
  width: 70%;
  height: 42px;
  padding: 4px;
  border-radius: 34px;
  border: 1px solid #ececec;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DateButton = styled.button`
  flex: 1;
  width: 33%;
  height: 100%;
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.primary_base : colors.white};
  color: ${({ $isSelected }) =>
    $isSelected ? colors.white : colors.text_secondary};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? colors.primary_base : colors.bg_gray_light};
  }
`;

export const DateText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const DayText = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

// 타임테이블 컨테이너
export const ScheduleContainer = styled.div`
  width: 100%;
  height: 22vh;
  border-radius: 10px;

  background-color: ${colors.bg_gray_light};
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 24px;
  }

  .swiper-pagination-bullet-active {
    background: ${colors.primary_base};
  }
`;

// 타임테이블 안에 요소들
export const ScheduleItem = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start; // 위에서부터 시작
  min-height: 18vh; // 항목 간 높이 통일
  align-items: center;
  gap: 0.9vh;
  
`;

// 타임테이블 상세보기 아이콘
export const IconHint = styled.div`
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 22px;
  height: 22px;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
    pointer-events: none; // 아이콘 자체는 클릭 방해 안 하게
  }
`;

export const ScheduleStatus = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:active {
    background-color: #469AF6;
    color: white;
    transform: scale(0.96);
  }

  ${({ $status }) => {
    switch ($status) {
      case "진행 중":
        return `
          background-color: ${colors.primary_base};
          color: white;
        `;
      case "완료":
        return `
          background-color: ${colors.bg_gray};
          color: ${colors.text_secondary};
        `;
      case "대기 중":
        return `
          background-color: white;
          color: ${colors.text_secondary};
          border: 1px solid ${colors.bg_gray};
        `;
      default:
        return "";
    }
  }}
`;

export const ScheduleTime = styled.div`
  font-size: 11px;

  font-weight: 400;
  color: ${colors.text_primary};
`;

export const ScheduleTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 13px;
  white-space: pre-line;

  font-weight: 600;
  color: ${colors.text_primary};
`;

export const LoadingText = styled.div`
  text-align: center;
  color: ${colors.text_secondary};
  margin-top: 20px;
`;

// InfoCard.jsx
export const InfoCardBox = styled.button`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${({ $clicked }) =>
    $clicked ? colors.primary_base : colors.bg_gray_light};
`;

export const InfoImg = styled.img`
  // height: auto;
  height: 26px;
  object-fit: contain; // 이미지 비율 유지
  margin-right: 8px; // 텍스트와 간격
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  color: ${({ $clicked }) => ($clicked ? colors.white : colors.text_secondary)};
`;

// Modal.jsx
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;

  background: ${colors.white};
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalImgContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalP = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

export const ModalTime = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 15px;
  }
`;

export const ModalP2 = styled.p`
  white-space: pre-line;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

export const ModalImg = styled.img`
  width: 80%;
  height: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
