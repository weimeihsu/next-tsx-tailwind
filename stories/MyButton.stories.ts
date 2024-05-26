import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from '../components/ButtonComponents'

const meta: Meta<typeof Button> = {
    title: 'Example/MyButton',
    component: Button,
  } 

export default meta

type Story = StoryObj<typeof meta>
  
export const Default: Story = {
    args: {
        title:'Button',
        type:'submit',
        variant:'outlined',
        size:'sm'
    }
}
  
