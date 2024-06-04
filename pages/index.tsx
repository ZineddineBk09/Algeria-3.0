import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Algeria3.0 is a community of developers, designers, and crypto enthusiasts who are passionate about building the future of the web in Algeria. We are the first web3 adopters in Algeria"
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="A Strong Community" overTitle="building the future of the web">
            <p>
              As early adopters of the web3 movement, we are building the future of the web. We are a community of developers, designers,
              and crypto enthusiasts who are passionate about building the future of the web. We are the first web3 adopter in Algeria.{' '}
              {/* <Link href="/help-center">Learn more &rarr;</Link> */}
              <br />
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Staying Up To Date With The Latest Trends"
            overTitle="treating the web3 ecosystem as a whole"
            reversed
          >
            <p>
              We are passionate and confident about the future of the web in Algeria. and we want to share our knowledge with the community.
              and be the first to know about the <strong>latest trends</strong> in the web3 ecosystem.
            </p>
            <ul>
              <li>Crypto News</li>
              <li>Metaverse (NFTs)</li>
              <li>Web3 (DAOs)</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Testimonials />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
