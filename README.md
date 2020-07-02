# Add Redux to React
Let's give React a break and have Redux handle our state.

## By the end of this lesson, you should be able to:
Add Redux to a React app for state management! 

> Note: In tomorrow's lesson, we'll use react-redux to do this instead. That is the preferred way. Today, we're just flexing our muscles to prepare for tomorrow.

## But why?
Redux can make it easier to:
- Manage state in large or complex apps
- Work in a team with many people
- Restructure our apps (i.e. add, remove, and move components)

```
// We can go from this:
<MeowBeans addBean={this.addBean} beans={this.state.beans} />

// To this!!:
<MeowBeans />
```

It can also reduce unnecessary component re-rendering in React. Remember, DOM is expensive - it likes the monies. It will make you pay for everything you do. A large app might become slow if there are too many unnecessary re-renders.

DOM is greedy! Bad DOM, bad!

## How we'll get there:
- Install Redux in our app
- Create the store
- Create the reducer to give to the store (stub to begin with)
- Connect to the Redux DevTools
- Add actions to dispatch to the restore, which will be handled by the reducer
- Update our components to work with the store instead of props