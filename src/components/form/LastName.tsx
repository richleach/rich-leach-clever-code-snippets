'use client'

type Props = {
    value: string;
    onChange: any;
    error?: string;
}

import { TextInput } from '@mantine/core';

export default function LastName({ value, onChange, error }: Props) {

    return (
        <TextInput
            label="Enter your last name"
            description="Don't get shy on me...."
            value={value}
            onChange={(event) => onChange(event.currentTarget.value)}
            error={error}
            required
        />
    );

}