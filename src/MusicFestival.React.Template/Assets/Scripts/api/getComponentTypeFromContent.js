import React from 'react';

import LandingPage from '../components/pages/LandingPage';
import ArtistContainerPage from '../components/pages/ArtistContainerPage';
import ArtistDetailsPage from '../components/pages/ArtistDetailsPage';

import LanguageSelector from '../components/widgets/LanguageSelector';
import Hero from '../components/widgets/Hero';
import ContentArea from '../components/ContentArea';

import GenericBlock from '../components/blocks/GenericBlock';
import ContentBlock from '../components/blocks/ContentBlock';
import ImageFile from '../components/media/ImageFile';


export default function getComponentTypeForContent(content) {
    let components = {
        LandingPage: LandingPage,
        ArtistContainerPage,
        ArtistDetailsPage,

        LanguageSelector,
        Hero,
        ContentArea,

        GenericBlock,
        ContentBlock,
        ImageFile
    };

    // Here we will try to find a component that matches the content type name.
    for (let i = content.contentType.length - 1; i >= 0; i--) {
        if (components[content.contentType[i]]) {
            const TagName = components[content.contentType[i]];
            return <TagName model={content} />;
        }
    }
    return null;
}
