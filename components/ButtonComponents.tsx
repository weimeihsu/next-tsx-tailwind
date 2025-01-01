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
    'text-sm',
    'leading-6',
    'shadow-sm',
    'disabled:cursor-not-allowed'],{
    variants:{
        variant:{
            contained:['bg-java','hover:bg-java-500'],
            outlined:['border','border-java','text-java'],
            ghost:['duration-300'],
            nav:['text-white', 'hover:bg-neutral-800']
        },
        size:{
            sm:['py-1','leading-5','text-xs', 'font-light'],
            md:[]  
        }, 
        colorScheme:{
            primary:['text-white','hover:border-java-400','hover:text-java-400','hover:bg-java-800'],
            
        }
},
defaultVariants:{
    variant:'contained',
    size:'md',
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

type ButtonProps = VariantProps<typeof btnStyles> & ComponentProps<'button'> & CustomIconButtonProps

type IconProps = VariantProps<typeof iconStyle> & ComponentProps<'button'>

const Button = ({text, type, Icon, showIcon = true, iconPosition,handleClick, variant, size, colorScheme, className, ...props}: ButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={type}
            className={twMerge(className, btnStyles({variant, size, colorScheme}))}
            onClick={handleClick}
            {...props}
        >
            {showIcon && Icon && iconPosition==='prefix' && <Icon className="w-5 h-5" />}
            <span className={`flex-1`}>{text}</span>
            {showIcon && Icon && iconPosition==='append' && <Icon className="w-5 h-5" />}
        </button>
     );
}

const IconButton = ({size, ...props}:IconProps) => {
    return( 
        <button className={iconStyle({size})} {...props}/>
    )
}
 
export { Button, IconButton }


