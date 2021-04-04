import styled from "styled-components";

interface HeroContainerProps {
  placeholder?: string;
  alignment?: string;
  margin?: boolean;
}

export const HeroContainer = styled.div.attrs<HeroContainerProps>(
  ({ placeholder }) => ({
    placeholder: placeholder,
  })
)<HeroContainerProps>`
  background-image: url("/images/background.jpg");
  background-size: cover;
  height: 350px;
  width: 100%;
  background-color: #cccccc;
  padding: 75px 0 0 75px;
`;
