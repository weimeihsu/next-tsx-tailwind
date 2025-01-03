import { cva, VariantProps } from 'class-variance-authority'
import { CustomIconButtonProps } from '@/types/index'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const btnStyles = cva(['transition-colors','flex',
    'w-full',
    'h-fit',
    'justify-center',
    'items-center',
    'rounded-sm',
    'px-3',
    'py-2',
    'shadow-sm',
    'disabled:cursor-not-allowed'],{
    variants:{
        intent:{
            primary:['text-white','bg-java','hover:bg-java-500','border-transparent'],
            secondary:['text-java','border','border-java','hover:bg-java-800'],
            soft:['text-white', 'bg-neutral-900', 'hover:bg-neutral-800'],
            ghost:['text-java','duration-300','hover:bg-java-500','hover:bg-java-800'], 
        },
        size:{
            sm:['py-1','leading-5','text-sm', 'font-light'],
            md:['py-2','leading-6','text-md','font-normal']  
        }
},
defaultVariants:{
    intent:'primary',
    size:'md',
}})

const iconStyle = cva(['transition-colors','rounded',
    'flex',
    'items-center',
    'justify-center',
    ],{
    variants:{
        intent:{
            icon:[],
            button:['p-2','bg-neutral-900', 'hover:bg-java-800']
        },
        size:{
            xs:['w-3','h-3'],
            sm:['w-4','h-4'],
            md:['w-5','h-5'],
            lg:['w-8','h-8']
        } 
        
},
defaultVariants: {
    size: "md",
  },})

type ButtonProps = VariantProps<typeof btnStyles> & ComponentProps<'button'> & CustomIconButtonProps

type IconProps = VariantProps<typeof iconStyle> & ComponentProps<'button'>

const Button = ({text, type, Icon, showIcon = true, iconPosition, handleClick, intent, size, className, ...props}: ButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={type}
            className={twMerge(className, btnStyles({intent, size}))}
            onClick={handleClick}
            {...props}
        >
            {showIcon && Icon && iconPosition==='prefix' && 
            (<Icon className={twMerge(iconStyle({ size }), "mr-2")} />)}
            {text}
            {showIcon && Icon && iconPosition==='append' && 
            (<Icon className={twMerge(iconStyle({ size }), "ml-2")} />)}
        </button>
     );
}

const IconButton = ({size, intent, ...props}:IconProps) => {
    return( 
        <button className={iconStyle({size, intent})} {...props}/>
    )
}
 
export { Button, IconButton }


