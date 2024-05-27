Redux - It is core and  Independent State Management Library.

React-redux - To used redux is react efficiency to craete connection wth  redux

redux-toolkit - Update version of redux which internally manage some of methods

They have FOUR main compoenents---

STORE - A articular store like user,product,todo,cart

REDUCERS - To update in anyfields of store we using reducer fucniton only 

USESELECTOR - To select something from store 

USEDISPATCH - To dispatch some values in Store using reducers and disptach values is store in action.payload in reducers funciton


To used Redux in REACT
npm i @reduxjs/toolkit
npm i react-redux



Keypoints-----

* It should be only ONE store per App 
* Slice simple means features to createSlice ,we need three thing:
  [name,initialState,reducers]
* state store all data updated data values AND action has payload which you want to * sent to reducer for any manupulation
* Make sure To exports all individual reducers by export const {} AND also export default Slice.reducers for Store

