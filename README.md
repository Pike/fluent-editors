Playground for Fluent Editors
=============================

This react app should at some point help us play with different kinds
of Fluent editors.

Basic structure is that `App` is the top-level component, which holds a
`MessageList`.

`MessageList` loads an example ftl file, and parses that and set's that as
state. It then renders each Message and Term. That is done via a React
Component per AST node. These components are automatically created via
`scripts/ast-gen.js`. Please don't edit them directly, but modify the
generation script and commit the result.

The component instantiation is done via a helper function inside that
module that knows how to map AST nodes to ReactComponents or <span>s.

The idea for experimentation is that one can just subclass individual
components, create a different rendering function, and benefit from most
of the existing AST components. That doesn't work right now, of course.

Be my guest.
