import React, {FC} from 'react';
import {Text} from 'react-native';

import textStyles from './styles';
import {TextLableType} from './types';

const Typography: FC<TextLableType> = ({
  children,
  style,
  textType,
  ...props
}: TextLableType) => {
  const styles = () => {
    switch (textType) {
      case 'hyperlink':
        return textStyles.hyperlink;
      case 'error':
        return textStyles.error;
      case 'success':
        return textStyles.success;
      default:
        return textStyles.defaultText;
    }
  };
  return (
    <Text style={[styles(), style]} {...props}>
      {children}
    </Text>
  );
};

export default Typography;
