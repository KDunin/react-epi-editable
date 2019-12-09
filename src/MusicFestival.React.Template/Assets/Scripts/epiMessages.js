/**
 * Context flags that are useful to enable properly working On-Page Editing.
 * Sets the context in the vuex store to be used on every component that is
 * interested.
 *
 * These values are `false` by default and will be updated when the page has
 * finished loading. See the event handler at the bottom of the page.
 *
 * Also registers the `beta/contentSaved` event that will update
 * the model in the store during editing.
 */

import { store } from '@/Scripts/index';
import { updateEpiContextAction } from '@/Scripts/store/actions/epiContext';
import { updateModelByContentLink } from '@/Scripts/store/actions/epiDataModel';

function setContext() {
    // The `beta/epiReady` event only has `isEditable`, but the epi object has both.
    const context = {
        inEditMode: window.epi.beta.inEditMode,
        isEditable: window.epi.beta.isEditable
    };

    // Make the context available to all React components.
    store.dispatch(updateEpiContextAction(context));

    // If we're in an editable context we want to update the model on every change by the editor
    if (window.epi.beta.isEditable) {
        window.epi.subscribe('beta/contentSaved', message => {
            store.dispatch(updateModelByContentLink(message.contentLink));
        });
    }
}

// Listen to the `beta/epiReady` event to update the `context` property.
window.addEventListener('load', () => {
    // Expect `epi` to be there after the `load` event. If it's not then we're
    // not in any editing context.
    if (!window.epi) {
        return;
    }

    // Check for beta and that ready is an actual true value (not just truthy).
    if (window.epi.beta && window.epi.beta.ready === true) {
        // `beta/epiReady` already fired.
        setContext();

    // The subscribe method won't be available in View mode.
    } else if (window.epi.subscribe) {
        // Subscribe if the `beta/epiReady` event hasn't happened yet.
        window.epi.subscribe('beta/epiReady', () => setContext());
    }
});
