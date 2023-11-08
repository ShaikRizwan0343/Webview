import React, { FC } from 'react';
import { Pressable } from 'react-native';
import styles from './styles';
import { ButtonPropType } from './types';
import Typography from '../typography/Typography';

const Button: FC<ButtonPropType> = ({
    text,
    color,
    textColor,
    rippleColor,
    borderRadius,
    textWeight,
    ...props
}: ButtonPropType) => {
    return (
        <Pressable
            style={[
                styles.button,
                !!color && {
                    backgroundColor: color
                },
                !!borderRadius && {
                    borderRadius: borderRadius
                }
            ]}
            android_ripple={{ color: rippleColor }}
            {...props}
        >
            <Typography
                style={[
                    styles.buttonText,
                    !!textColor && { color: textColor },
                    !!textWeight && {
                        fontWeight: textWeight
                    }
                ]}
            >
                {text}
            </Typography>
        </Pressable>
    );
};

export default Button;
