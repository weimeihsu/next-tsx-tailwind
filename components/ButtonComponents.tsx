import { cva, VariantProps } from 'class-variance-authority'
import { CustomButtonProps } from '@/types/index'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const btnStyles = cva(['transition-colors','flex',
    'w-full',
    'h-fit',
    'justify-center',
    'items-center',
    'rounded-sm',
    'px-3',
    'py-1.5',
    'text-sm',
    'leading-6',
    'shadow-sm',
    'disabled:cursor-not-allowed'],{
    variants:{
        variant:{
            contained:['bg-java','hover:bg-java-500'],
            outlined:['border','border-java','text-java'],
            ghost:['duration-300']
        },
        size:{
            sm:['py-1','leading-5','text-xs', 'font-light'],
            md:[]  
        }, 
        colorScheme:{
            primary:['text-white','hover:border-java-400','hover:text-java-400','hover:bg-java-800'],
            secondary:['text-java-400',]
        }
},
compoundVariants:[
    {
        variant:'ghost',
        // colorScheme:'primary',
        className:'hover:bg-java-800'
    },
    {
        variant:'outlined',
        // colorScheme:'secondary',
        className:'hover:bg-java-800'
    }
],
defaultVariants:{
    variant:'contained',
    size:'md',
    // colorScheme:'primary'
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

type ButtonProps = VariantProps<typeof btnStyles> & ComponentProps<'button'> & CustomButtonProps

type IconProps = VariantProps<typeof iconStyle> & ComponentProps<'button'>

const Button = ({title, type, handleClick, variant, size, className, ...props}: ButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={type}
            className={twMerge(className, btnStyles({variant, size}))}
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


