# MusicFestival React.js Templates

This sample site demonstrates one approach to render Episerver content in a client side framework that is using client side routing for navigation with a working On Page Edit (OPE) mode in the Episerver UI.

This particular solution uses [React.js](https://reactjs.org/) with [Redux](https://react-redux.js.org/) to handle the state of the app in a `single source of truth`. Most of the techniques are framework agnostic and can be used with any other framework, such as Vue or Angular.

Link to original Vue App: https://github.com/episerver/musicfestival-vue-template

Content is fetched from Episerver using the Content Delivery API: https://world.episerver.com/documentation/developer-guides/CMS/Content/content-delivery-api/

## Prerequisites

This project uses:

-   npm 6+
-   Visual Studio 2015+
-   SQL Server 2016 Express LocalDB ([download here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads))

## Setup and Run

1. Run `setup.cmd`
2. Open `MusicFestival.React.Template.sln` and hit `Ctrl + F5`
    - Or build with `build.cmd`, and set up the site on IIS
3. Login on `/episerver` with either one of the following:

| Name     | Password    | Mailbox                                                               | Email                      |
| -------- | ----------- | --------------------------------------------------------------------- | -------------------------- |
| cmsadmin | sparr0wHawk |                                                                       |                            |
| emil     | sparr0wHawk | https://www.mailinator.com/v3/index.jsp?zone=public&query=epic-emil   | epic-emil@mailinator.com   |
| ida      | sparr0wHawk | https://www.mailinator.com/v3/index.jsp?zone=public&query=epic-ida    | epic-ida@mailinator.com    |
| alfred   | sparr0wHawk | https://www.mailinator.com/v3/index.jsp?zone=public&query=epic-alfred | epic-alfred@mailinator.com |
| lina     | sparr0wHawk | https://www.mailinator.com/v3/index.jsp?zone=public&query=epic-lina   | epic-lina@mailinator.com   |

## Notable files

### Redux store reducers

-   [epiDataModel.js](src/MusicFestival.React.Template/Assets/Scripts/store/modules/epiDataModel.js): the module that stores and updates the model object to be displayed on every component.
-   [epiContext.js](src/MusicFestival.React.Template/Assets/Scripts/store/modules/epiContext.js): makes `inEditMode` and `isEditable` flags available to the OPE helpers.

### On-Page Editing helpers

-   [epiEdit.js](src/MusicFestival.React.Template/Assets/Scripts/directives/epiEdit.js): a directive that can be added on components to make them optionally editable (e.g. `<span data-epi-edit="Name">`), through `isEditable` and `epiDisableEditing`.
-   [EpiProperty.vue](src/MusicFestival.React.Template/Assets/Scripts/components/EpiProperty.vue): a component that renders a button to edit a property (e.g. `<epi-property property-name="Name">`).
-   [epiMessages.js](src/MusicFestival.React.Template/Assets/Scripts/epiMessages.js): registers the `beta/contentSaved` and `beta/epiReady` message handlers that updates the redux store.

### Routing helpers

-   [PageComponentSelector.jsx](src/MusicFestival.React.Template/Assets/Scripts/components/PageComponentSelector.jsx): loads the React page component and owns its model.
-   [BlockComponentSelector.jsx](src/MusicFestival.React.Template/Assets/Scripts/components/BlockComponentSelector.jsx): loads the React block component.
-   [EpiLink.jsx](src/MusicFestival.React.Template/Assets/Scripts/components/widgets/EpiLink.jsx): regular links when in OPE and React router links otherwise.
-   [EpiViewModeLink.jsx](src/MusicFestival.React.Template/Assets/Scripts/components/widgets/EpiViewModeLink.jsx): disables links completely when in OPE.

### API

-   [ExtendedContentModelMapper.cs](src/MusicFestival.React.Template/Models/ExtendedContentModelMapper.cs): flattens the ContentDeliveryAPI JSON and enables languages.
-   [ContentDeliveryExtendedRouting folder](src\MusicFestival.React.Template\Infrastructure\ContentDeliveryExtendedRouting): regular routing with friendly URLs is enabled by Johan Björnfot's ContentDeliveryExtendedRouting (see [his github page](https://github.com/jbearfoot/ContentDeliveryExtendedRouting) and [his blog](https://world.episerver.com/blogs/Johan-Bjornfot/Dates1/2018/5/extended-routing-for-episerver-content-delivery-api/)).

## Overall structure

To avoid having multiple razor files the pages and blocks have their own controller and only one razor view each.

```
DefaultPageController.cs
    DefaultPage/Index.cshtml
        DefaultPage.jsx
            router-view (React.js)
                router.js (Updates the store model with the url)
                    PageComponentSelector.jsx (Use the model from the store)
                        ArtistContainerPage/ArtistDetailsPage/LandingPage.jsx (Gets the model as a prop)

PreviewController.cs
    Preview/Index.cshtml (sets content-link attribute on <preview>)
        Preview.jsx (Use and update the model in the store with the content link)
            BlockComponentSelector.jsx (Gets the model as a prop and passes it on)
                BuyTicketBlock/ContentBlock/GenericBlock.jsx (Gets the model as a prop)
```

## Building client side resources

-   `npm run webpack`: Alias for `npm run webpack-build-dev`.
-   `npm run webpack-build-dev`: Builds a development package.
-   `npm run webpack-watcher`: Builds a development package, and re-builds automatically when relevant files are changed.
-   `npm run webpack-build-prod`: Builds a production package.
