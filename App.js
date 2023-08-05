import { StyleSheet, Text, View } from "react-native";
import ExampleEffect from "./components/ExampleEffect";
// import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
// import Counter from "./components/Counter";
// import MyInput from './components/MyInput';
// import IncrementCounter from "./components/IncrementCounter";
// import Form from "./components/Form";
// import Login from "./components/Login";
// import TouchablePractice from "./components/TouchablePractice";
import UseEffectFlatList from "./components/UseEffectFlatList";

export default function App() {
  return (
    <View style = {{flex: 1}}>
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}
      {/* <TouchablePractice/> */}
      {/* <ExampleEffect/> */}
      <UseEffectFlatList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
  }
})
