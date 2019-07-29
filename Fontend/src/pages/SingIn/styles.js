import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Box = styled(LinearGradient).attrs({
  colors: ["#7a91ca", "#385774"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;

  padding-top: ${15 + getStatusBarHeight()};
`;
export const Container = styled.View`
  padding-left: 40;
  padding-right: 40;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 24;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  text-align: center;
  padding: 16px 0px;
  color: #444a5a;
`;

export const Error = styled.Text`
  color: #ff0000;
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Form = styled.View``;

export const Input = styled.TextInput`
  height: 42;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: left;
  padding-horizontal: 15;
`;

export const Button = styled.TouchableOpacity`
  height: 44;
  background-color: #7a91ca;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16;
`;

export const Registrar = styled.TouchableOpacity``;
