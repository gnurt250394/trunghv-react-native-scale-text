import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    StyleProp,
    TextProps
} from 'react-native';
interface PropsCustomerText {
    // fontSize Text
    size:string,
    // style Text
    style:StyleProp<TextProps>
}

declare module 'trunghv-react-native-scale-text'{
  export default class ScaleText extends React.Component<PropsCustomerText,{}>{

      }
   
}
    
   
