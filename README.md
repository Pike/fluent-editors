Playground for Fluent Editors
=============================

This react-redux app should at some point help us play with different kinds
of Fluent editors.

Basic structure is that `App` is the top-level component, which holds a
`MessageList`. That has a `Message` for each Message or Term in the `messages`
state, and a `EditableMessage` for the on at the `messageEditing` index.
