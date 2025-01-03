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
            secondary:['text-java','border-java','hover:bg-java-500'],
            soft:['text-white', 'bg-neutral-900', 'hover:bg-neutral-800'],
            ghost:['text-java','duration-300','hover:bg-java-500'], 
        },
        size:{
            sm:['py-1','leading-5','text-xs', 'font-light'],
            md:['py-2','leading-6','text-sm','font-normal']  
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

const Button = ({text, type, Icon, showIcon = true, iconPosition, handleClick, intent, size, className, ...props}: ButtonProps) => {
    return ( 
        <button
            disabled={false}
            type={type}
            className={twMerge(className, btnStyles({intent, size}))}
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


