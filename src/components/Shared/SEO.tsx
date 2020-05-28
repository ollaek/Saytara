import React, { Fragment, memo } from 'react';
import Helmet from 'react-helmet';

type TSeo = {
    title: string,
    description: string,
    index?: boolean,
    follow?: boolean,
    type: string,
    imagesUrls?: string[]
};

const SEO = ({ title, description, follow, index, type, imagesUrls }: TSeo) => {
    const fullTitle = `React Redux Template - ${title}`;
    const fullDescription = `This is a React Redux Hooks Typescript starter template, ${description}`;
    const robots = `${index ? 'index' : 'noindex'}, ${follow ? 'follow' : 'nofollow'}`;
    const siteName = "ReactReduxTemplate";
    const url = window.location.href;

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <link rel="canonical" href={url} />

            {/* OR "noindex, nofollow" if you don't want the crawler to follow all the links in your page, or not index your page */}
            <meta name="robots" content={robots} />

            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />

            {imagesUrls && imagesUrls.map(url => (
                <Fragment key={url}>
                    <meta property="og:image" content={url} />
                    <meta name="twitter:image" content={url} />
                </ Fragment>
            ))}

            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:site" content="@USERNAMEFORTWITTER" />
            <meta name="twitter:creator" content="@USERFORTWITTERPAGECREATOR" />
        </Helmet>
    );
};

export default memo(SEO);