import Template from "./Template";

const English = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} nav={navigation.navigate} />
}

export default English;