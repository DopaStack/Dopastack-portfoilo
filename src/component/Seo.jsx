import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = "https://dopastack.com/";
const MAIN_KEYWORDS = "Custom Software Development, Web Development, Business Branding, Mobile App Development, Digital Marketing, AI and Machine Learning, UI/UX Design, IT Consulting, Content Writing, Digital Transformation, E-commerce Solution, Product Design";
const DEFAULT_IMAGE_CARD = "https://dopastack.com/thumbnail.png";
const DEFAULT_TITLE = "Dopastack - Innovative Tech Solutions";
const DEFAULT_DESCRIPTION = "Dopastack is dedicated to connecting tech professionals with clients in need of specialized services. Explore our expert tech solutions today!";
const POSTFIX_TITLE = " - Dopastack";

const Seo = ({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    link,
    keywords = "",
    imageCard = DEFAULT_IMAGE_CARD,
    largeTwitterCard,
    addPostFixTitle,
    noIndex,
}) => {
    let metaTitle = addPostFixTitle ? `${title} ${POSTFIX_TITLE}` : title;

    const metaDesc = description;
    const metaLink = link || DOMAIN; // Fallback to domain if no link is provided
    const metaKeywords = keywords.length > 0 ? `${MAIN_KEYWORDS}, ${keywords}` : MAIN_KEYWORDS;

    let metaImageCard;
    if (imageCard.startsWith("https")) {
        metaImageCard = imageCard;
    } else {
        metaImageCard = DOMAIN + imageCard;
    }

    const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";
    const twitterCardType = largeTwitterCard ? "summary_large_image" : "summary";

    return (
        <Helmet>
            <html lang="en" />
            <title>{metaTitle}</title>
            <meta name="description" content={metaDesc} />
            <link rel="canonical" href={metaLink} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content={metaRobots} />

            {/* Open Graph Tags */}
            <meta property="og:url" content={metaLink} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={metaImageCard} />

            {/* Twitter Tags */}
            <meta property="twitter:site" content="@DopaStack" />
            <meta property="twitter:title" content={metaTitle} />
            <meta property="twitter:description" content={metaDesc} />
            <meta property="twitter:card" content={twitterCardType} />
            <meta property="twitter:image" content={metaImageCard} />

            <meta name='referrer' content='origin-when-cross-origin' />
        </Helmet>
    );
};

export default Seo;