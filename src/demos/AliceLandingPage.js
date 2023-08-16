import React from "react";
import tw from "twin.macro";

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideoAlice.js";
import MainFeature from "components/features/TwoColWithoutButton";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Features from "components/features/ThreeColSimpleAlice.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/MiniCenteredFooterAlice.js";


import TeamIllustrationSrc from "images/team-illustration-2.svg";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";



export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;
    const imageCss = tw`rounded-4xl`;


    return (
        <AnimationRevealPage>
        <Hero 
            heading={<>Alice Forlani <br/> <HighlightedText>Life and Business Coach</HighlightedText></>}
            description="Sono Alice, la mia missione è aiutare le persone a manifestare il loro vero potenziale nella vita e nel lavoro!"
            imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80"
            primaryButtonText="Scopri di più"
            secondaryButtonText="Contattami"
            imageCss={imageCss}
            features={[]}
            testimonial = {
                {quote:"Sono Alice, la mia missione è aiutare le persone a manifestare il loro vero potenziale nella vita e nel lavoro!"}
              }
        />

        <MainFeature
            subheading={<Subheading>CHI SONO</Subheading>}
            imageSrc="https://images.unsplash.com/photo-1470472304068-4398a9daab00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            imageBorder={true}
            imageDecoratorBlob={true}
            heading = {(
                <>
                  Sono una Coach <HighlightedText>certificata ICF</HighlightedText>
                </>
              )}
            description="Sono pronta ad aiutare le persone a raggiungere i loro obiettivi e a scoprire il loro pieno potenziale. Sia che si tratti di affrontare sfide personali o professionali sarò qui per accompagnarvi lungo il cammino. Seguitemi per scoprire strumenti, strategie e ispirazione per vivere una vita appagante e realizzata!"
        />

        <FeatureWithSteps
            subheading={<Subheading>COSA POSSO FARE PER TE</Subheading>}
            heading={
            <>
                Easy to <HighlightedText>Get Started.</HighlightedText>
            </>
            }
            textOnLeft={false}
            // imageSrc={macHeroScreenshotImageSrc}
            steps= {[   {
                heading: "Registrati",
                description: "Registrati per una sessione conoscitiva gratuita."
              },
              {
                heading: "Valuta",
                description: "Nella prima sessione ti aiuterò a capire se può fare al caso tuo."
              },
              {
                heading: "Organizza",
                description: "Se pensi che questo percorso sia quello di cui hai bisogno, creiamo insieme un percorso."
              }]}
            imageSrc = "https://images.unsplash.com/photo-1512406926044-c2b194f3975a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            imageDecoratorBlob={false}
            decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />

        <Features
            heading={
            <>
                I miei <HighlightedText>Valori.</HighlightedText>
            </>
            }
            cards={[
            {
                imageSrc: shopIconImageSrc,
                title: "ETICA",
                description: "Lorem ipsum donor amet siti ceali placeholder text",
            },
            {
                imageSrc: chefIconImageSrc,
                title: "CONCRETEZZA",
                description: "Lorem ipsum donor amet siti ceali placeholder text",
            },
            {
                imageSrc: celebrationIconImageSrc,
                title: "COERENZA",
                description: "Lorem ipsum donor amet siti ceali placeholder text",
            },
            {
                imageSrc: chefIconImageSrc,
                title: "COSTANTE FORMAZIONE",
                description: "Lorem ipsum donor amet siti ceali placeholder text",
            },
            {
                imageSrc: celebrationIconImageSrc,
                title: "AUTOCRITICA",
                description: "Lorem ipsum donor amet siti ceali placeholder text",
            }
            ]}

            imageContainerCss={tw`p-2!`}
            imageCss={tw`w-20! h-20!`}
        />

        <FAQ
            heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
        />
        <Footer />
        </AnimationRevealPage>
    );
}