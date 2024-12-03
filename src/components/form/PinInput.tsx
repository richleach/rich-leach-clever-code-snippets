import React from 'react';
import { PinInput, Text } from '@mantine/core';

interface PinInputFieldProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function PinInputField: React.FC<PinInputFieldProps> = ({ value, onChange, error }) => (
    <div>
        <PinInput
            length={4}
            value={value}
            onChange={onChange}
            placeholder="●"
        />
        {error && (
            <Text color="red" size="xs" mt="xs">
                {error}
            </Text>
        )}
    </div>
);

