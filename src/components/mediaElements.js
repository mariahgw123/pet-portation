import styled from "styled-components";

export const Wrapper = styled.div`
  background: #e5fffa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const WrapperBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -0-object-fit: cover;
  object-fit: cover;
  background: #326c2b;
`;

export const Title = styled.h1`
  font-size: 2em;
  display: flex;
  text-align: center;
  justify-content: center;
  color: palevioletred;
  padding: 0 30px;
`;
export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 500px;
  padding: 20px 24px;
`;
export const TitleWrapper = styled.section``;
export const GalleryWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
