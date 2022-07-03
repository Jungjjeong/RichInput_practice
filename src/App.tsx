import styled from '@emotion/styled';
import { Input } from './components';

const AppContainer = styled.div`
  width: 100vw;
  height: auto;
  box-sizing: border-box;
  background-color: #f6f6f6;
  padding: 100px 0;
`;

const Header = styled.h1`
  width: fit-content;
  margin: 50px auto;
  font-size: 5rem;
`;

const InnerSection = styled.div`
  width: 35%;
  min-width: 350px;
  margin: 0 auto;
`;

const InputWrapper = styled.div`
  box-sizing: border-box;
  padding: 50px 0;
`;

const ImageWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
  border-radius: 5px;
  overflow: hidden;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>Input Formatting</Header>
      <InnerSection>
        <InputWrapper>
          <Input
            label="Phone number formatting"
            placeholder="010-XXXX-XXXX"
            formatStyle="phone"
          />
          <Input
            label="Phone number formatting with separator"
            placeholder="010?XXXX?XXXX"
            separator="?"
            formatStyle="phone"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052184-366ce0d5-85bf-4708-a8ea-d0943166e46a.png" />
          </ImageWrapper>
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Date formatting"
            placeholder="YYYY/MM/DD"
            formatStyle="date"
          />
          <Input
            label="Date formatting with separator"
            placeholder="YYYY?MM?DD"
            formatStyle="date"
            separator="?"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052357-04fae195-662e-474b-b245-0c4cb36da65a.png" />
          </ImageWrapper>
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Time formatting"
            placeholder="HH:MM:SS"
            formatStyle="time"
          />
          <Input
            label="Time formatting with separator"
            placeholder="HH?MM?SS"
            separator="?"
            formatStyle="time"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052397-28196870-e6b4-498c-a39f-0b7b3e76c7a3.png" />
          </ImageWrapper>
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Numerical(Thousand) formatting"
            placeholder="10,000,000"
            formatStyle="numerical"
          />
          <Input
            label="Numerical(Thousand) formatting with separator"
            placeholder="10?000?000"
            separator="?"
            formatStyle="numerical"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052422-922fde19-0f0c-44fd-93b2-a88b06045a75.png" />
          </ImageWrapper>
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Custom formatting(1)"
            customFormatStyle="#### #### #### ####"
            placeholder="#### #### #### ####"
          />
          <Input
            label="Custom formatting(2)"
            customFormatStyle="(###) ####-####"
            placeholder="(###) ####-####"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052447-d3590ae1-8706-493e-8033-a08053a07322.png" />
          </ImageWrapper>
        </InputWrapper>

        <InputWrapper>
          <Input label="Using Prefix" prefix="PREFIX-" />
          <Input
            label="Using Prefix + Phone formatting"
            prefix="+82"
            formatStyle="phone"
          />
          <Input
            label="Using Prefix + Custom formatting"
            prefix="+82"
            customFormatStyle="(###) ####-####"
          />
          <ImageWrapper>
            <img src="https://user-images.githubusercontent.com/72294509/177052481-783be535-03a6-4f82-b911-b9904d9ad6ab.png" />
          </ImageWrapper>
        </InputWrapper>
      </InnerSection>
    </AppContainer>
  );
};

export default App;
