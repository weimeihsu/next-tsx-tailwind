import { MouseEventHandler } from "react";
import { LucideProps } from 'lucide-react';

export interface CustomIconButtonProps {
    text: string,
    type: string,
    handleClick?: MouseEventHandler,
    onClick?: () => void // Click handler (optional),
    Icon?: React.ComponentType<LucideProps>, // The icon component (optional)
    iconPosition?: 'prefix' | 'append', // Icon position: before or after the text
    showIcon?: boolean, // Flag to control icon visibility
    
}


