import Template from "./Template";

const Maths = ({ navigation, route }) => {
  const subject = route.name;
  return <Template subject={subject} goBack={navigation.goBack} nav={navigation.navigate} />
}

export default Maths;