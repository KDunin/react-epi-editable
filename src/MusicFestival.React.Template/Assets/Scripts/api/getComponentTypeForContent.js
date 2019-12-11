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

const components = {
    LandingPage,
    ArtistContainerPage,
    ArtistDetailsPage,

    LanguageSelector,
    Hero,
    ContentArea,

    GenericBlock,
    ContentBlock,
    ImageFile
};

export default function getComponentTypeForContent(content) {
    // Here we will try to find a component that matches the content type name.
    const Component = components[content.contentType.reverse().find(component => component in components) || 'GenericBlock'];
    return Component ? <Component model={content} /> : null;
}
