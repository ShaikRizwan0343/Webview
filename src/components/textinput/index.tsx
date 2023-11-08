import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';
import { TextFieldPropType } from './types';
import Typography from '../typography/Typography';

const TextField: FC<TextFieldPropType> = ({
    textInputViewStyle,
    textLabel,
    textLabelStyles,
    ...props
}: TextFieldPropType) => {
    return (
        <>
            {textLabel ? (
                <View>
                    <Typography
                        style={[styles.textLabelstyle, textLabelStyles]}
                    >
                        {textLabel}
                    </Typography>
                </View>
            ) : null}
            <View style={[styles.textInputContainer, textInputViewStyle]}>
                <TextInput placeholderTextColor={'grey'} {...props} />
            </View>
        </>
    );
};

export default TextField;
