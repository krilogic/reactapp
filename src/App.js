
import { Provider } from 'react-redux';
import './App.css';
import HttpGet from './Components/Axios/HttpGet';
import HttpPost from './Components/Axios/HttpPost';
import ClassLifeCycle from './Components/Class/LifeCycle/ClassLifeCycle';
import Mount from './Components/Class/Mount';
import MountBtn from './Components/Class/MountBtn';
import ArrayClass from './Components/Class/State/ArrayClass';
import ClassState from './Components/Class/State/ClassState';
import ComponentC from './Components/Context/ComponentC';
import ComponentA from './Components/Functional/ComponentA';
import DataFetchUseReducer from './Components/Functional/DataFetchUseReducer';
import DataFetchUseState from './Components/Functional/DataFetchUseState';
import FunctionLifecycle from './Components/Functional/FunctionLifecycle';
import ObjectReducer from './Components/Functional/ObjectReducer';
import Reducer from './Components/Functional/Reducer';
import UseEffect from './Components/Functional/UseEffect';
import UseEffectBtn from './Components/Functional/UseEffectBtn';
import MouseClick from './Components/HOC/MouseClick';
import MouseOver from './Components/HOC/MouseOver';
import Array from './Components/Hooks/UseState/ArrayState/Array';
import FunctionState from './Components/Hooks/UseState/FunctionState';
import DropDownAPI from './Components/Interview/DropDownAPI';
import Counter from './Components/RenderPros/Counter';
import MouseClick2 from './Components/RenderPros/MouseClick2';
import MouseOver2 from './Components/RenderPros/MouseOver2';
import UserFetch from './Components/Samples/Users/Components/UserFetch';
import UserSave from './Components/Samples/Users/Components/UserSave';
import { userStore } from './Components/Samples/Users/redux/userStore';
import CakeContainer from './Components/StateMangement/CakeContainer';
import IceCreamContainer from './Components/StateMangement/IceCreamContainer';
import store from './Components/StateMangement/redux/store';
import BooksContainer from './Components/StateMangement/UsingHooks/Components/BooksContainer';
import { storeHook } from './Components/StateMangement/UsingHooks/redux/storeHook';

function App() {
  return (
    <div className="App">
      {/* <MouseClick name="Gopi"/>
      <MouseOver name="kirs"/>
      <Counter
        render={(count, incrementCount) => (
          <MouseClick2 count={count} incrementCount={incrementCount} />
        )} />

      <Counter
        render={(count, incrementCount) => (
          <MouseOver2 count={count} incrementCount={incrementCount} />
        )}
      />
      <ComponentC/> */}
      {/* <HttpGet/> */}
      {/* <HttpPost/> */}
      {/* <FunctionState/> */}
      {/* <ClassState/> */}
      {/* <Array/> */}
      {/* <ArrayClass/> */}
      {/* <ClassLifeCycle/> */}
      {/* <FunctionLifecycle/> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseEffectBtn></UseEffectBtn> */}
      {/* <Mount></Mount> */}
      {/* <MountBtn></MountBtn> */}
      {/* <Reducer></Reducer> */}
      {/* <ObjectReducer></ObjectReducer> */}
      {/* <ComponentA></ComponentA> */}
      {/* <DataFetchUseState></DataFetchUseState> */}
      {/* <DataFetchUseReducer></DataFetchUseReducer> */}
      {/* <Provider store={store}>
        <CakeContainer></CakeContainer>
        <IceCreamContainer></IceCreamContainer>
      </Provider> */}
      {/* <Provider store={storeHook}>
        <BooksContainer></BooksContainer>
      </Provider> */}
      <Provider store={userStore}>
      <UserSave></UserSave>
      <UserFetch></UserFetch>
      </Provider>
      {/* <DropDownAPI></DropDownAPI> */}
    </div>
  );
}

export default App;
