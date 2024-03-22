'use client'
import { cva, VariantProps } from 'class-variance-authority';
import { CustomButtonProps } from '@/types/index'

const buttonStyles = cva(['transition-colors'],{
    variants:{
        variant:{
            text:['hover:bg-supernova-700'],
            contained:['bg-supernova',],
            outlined:[]
        },
        format:{
            button:['flex',
                'w-full',
                'justify-center',
                'rounded-sm',
                'px-3',
                'py-2',
                'text-sm',
                'leading-6',
                'shadow-sm'],
            icon:['rounded-full',
                'w-12',
                'h-12',
                'flex',
                'items-center',
                'justify-center',
                'p-2'],
        }, 
    },
    defaultVariants:{
        variant:'contained',
        format:'button'
    }
})
type ButtonPropps = VariantProps<typeof buttonStyles> 

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
     );
}
 
export default CustomButton;