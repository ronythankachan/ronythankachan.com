import HeroSection from "../components/shared/HeroSection";
import Container from "../components/shared/Container";
import ContactIntro from "../components/ContactIntro";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
const Contact = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <ContactIntro />
          <ContactForm />
        </Container>
      </HeroSection>
      <Container>
        <FAQ />
      </Container>
    </>
  );
};

export default Contact;
