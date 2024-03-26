
import { cva, VariantProps } from 'class-variance-authority'
import { CustomButtonProps } from '@/types/index'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(['transition-colors','flex',
    'w-full',
    'h-fit',
    'justify-center',
    'items-center',
    'rounded-sm',
    'px-3',
    'py-1.5',
    'text-sm',
    'leading-6',
    'shadow-sm'],{
    variants:{
        variant:{
            text:['hover:bg-java-800'],
            contained:['bg-java','hover:bg-java-500'],
            outlined:['border','text-java','hover:border-java-400','hover:text-java-400','hover:bg-java-800']
        },
        size:{
            sm:['py-1','leading-5','text-xs', 'font-light'],
            md:[]  
        }, 
},
defaultVariants:{
    variant:'contained',
    size:'md'
}})

const iconStyle = cva(['transition-colors','rounded',
    'flex',
    'items-center',
    'justify-center',
    'p-1',
    'bg-neutral-900',
    'hover:bg-java-800'],{
        variants:{
            size:{
                sm:['w-6','h-6'],
                md:['w-9','h-9'],
                lg:['w-10','h-10']
            }, 
    }})
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'> & CustomButtonProps

type IconProps = VariantProps<typeof iconStyle> & ComponentProps<'button'>

const Button = ({title, type, handleClick, variant, size, className, ...props}: ButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={type}
            className={twMerge(className, buttonStyles({variant, size}))}
            onClick={handleClick}
            {...props}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
     );
}

const IconButton = ({size, ...props}:IconProps) => {
    return( 
        <button className={iconStyle({size})} {...props}/>
    )
}
 
export { Button, IconButton }


