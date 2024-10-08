'use client'

import { createTodo } from '@/app/actions/actions'

export function Button() {
    return <button onClick={() => createTodo()}>Create Todo</button>
}