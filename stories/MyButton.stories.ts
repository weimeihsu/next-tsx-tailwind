import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ButtonComponents'

const meta: Meta<typeof Button> = {
    title: 'Example/MyButton',
    component: Button,
    parameters:{
        Layout:'center'
    },
    tags: ['autodocs'],
  } 

export default meta

type Story = StoryObj<typeof meta>
  
export const Default: Story = {
    args: {
        title:'Button',
        type:'submit',
        variant:'contained',
        size:'md',
        colorScheme:'primary'
    }
}
  
