import { useEffect } from "react";
import Template from "./Template";

const Biology = ({navigation, route}) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} nav={navigation.navigate}/>
}

export default Biology;