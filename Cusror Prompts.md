I want to build a simple, fast-to-ship To-Do app using Next.js and the Context API for state persistence.  
No database integration yet ,  just keep all data in context or local storage so I can demonstrate app logic quickly.

The app should include:
- A main page that lists all todos.
- Ability to add a new todo, mark it complete/incomplete, and delete it.
- Simple UI using Tailwind CSS.
- Keep the architecture minimal and easy to extend later (e.g., I may add Supabase later).
- Focus on showing clear structure, modular components, and pragmatic design choices.
- Prioritize fast iteration and working software over perfect design.
- Once done, summarize your reasoning and architecture in the planning markdown file.

Remember:
- Ship a working MVP fast.
- Think through trade-offs briefly.
- Keep it clean, simple, and easy to follow.

-----------------------------------------------------

This is perfect, but I have one note, on mobile devices, the delete button doesn’t appear. fix this please

-----------------------------------------------------

change the delete button to be always visible on desktop and mobile

-----------------------------------------------------

You added the dark mode toggle, but it’s not working correctly. When I switch it on or off, the page still displays the same white color

-----------------------------------------------------

When I click the “Add” button without typing anything in the input field, it should display a message telling the user to enter something. It should also handle cases where the user only enters empty spaces

-----------------------------------------------------

When refreshing the page, it first shows the "No todos yet" message, and then the todos appear. There should be a proper loading state instead.