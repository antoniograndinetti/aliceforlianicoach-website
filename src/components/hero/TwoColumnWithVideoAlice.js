import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";

// import ReactModalAdapter from "../../helpers/ReactModalAdapter.js";
// import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

// import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
// import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/design-illustration.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"


// const Container = tw.div`relative`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
// const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
// const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
// const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;

// const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Heading = tw(SectionHeading)`text-left font-black leading-snug xl:text-6xl`;

// const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;

const PrimaryButton = tw.button`font-bold  mt-4 sm:mt-0 sm:ml-4  px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

// const WatchVideoButton = styled.button`
//   ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
//   .playIcon {
//     ${tw`stroke-1 w-12 h-12`}
//   }
//   .playText {
//     ${tw`ml-2 font-medium`}
//   }
// `;

// const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
const ContentWithVerticalPadding = tw.div`py-20 lg:py-20`;
const IllustrationContainer =  tw.div`relative z-40 transform  justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;
// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

// const StyledModal = styled(ReactModalAdapter)`
//   &.mainHeroModal__overlay {
//     ${tw`fixed inset-0 z-50`}
//   }
//   &.mainHeroModal__content {
//     ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
//   }
//   .content {
//     ${tw`w-full lg:p-16`}
//   }
// `;
// const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;


// const Testimonial = tw.div`max-w-sm rounded-b md:rounded relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-6 bg-primary-500 text-gray-100 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
// const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
// const Quote = tw.blockquote``
// const CustomerName = tw.p`mt-4 font-bold`
// const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`

export default ({
  heading = "Modern React Templates, Just For You",
  description="Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.",
  primaryButtonText="Get Started",
  primaryButtonUrl="#",
  secondaryButtonText="Get Started",
  secondaryButtonUrl="#",
  imageSrc=DesignIllustration,
  imageCss=null,
  imageDecoratorBlob = false,
  testimonial = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    customerName: "Charlotte Hale",
    customerCompany: "Delos Inc."
  }
}) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <Header />
      <Container>
        <ContentWithVerticalPadding>
          <Row>
          <TextColumn>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <PrimaryButton as="a" href={secondaryButtonUrl}>{secondaryButtonText}</PrimaryButton>
              {/* <WatchVideoButton onClick={toggleModal}>
                <span className="playIconContainer">
                  <PlayIcon className="playIcon" />
                </span>
                <span className="playText">{watchVideoButtonText}</span>
              </WatchVideoButton> */}
            </Actions>
          </TextColumn>
          <ImageColumn>
            <IllustrationContainer>
              <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              />
              {imageDecoratorBlob && <DecoratorBlob2 />}
              {/* <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                </Testimonial> */}
            </IllustrationContainer>
          </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
        <DecoratorBlob1 />
        {/* <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">
            <ResponsiveVideoEmbed url={watchVideoYoutubeUrl} tw="w-full" />
          </div>
        </StyledModal> */}
      </Container>
    </>
  );
};
