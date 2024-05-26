import type { Meta, StoryObj } from '@storybook/react'
import Stack from '@/components/Stack'

const meta: Meta<typeof Stack> = {
    title: 'Example/Stack',
    component: Stack,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4} 
    }
} 

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {

}

