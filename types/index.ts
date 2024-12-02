import { MouseEventHandler } from "react";
import { LucideProps } from 'lucide-react';

export interface CustomButtonProps {
    title: string,
    type: string,
    handleClick?: MouseEventHandler
}

export interface CustomIconButtonProps {
    text:string,
    Icon?: React.ComponentType<LucideProps>; // The icon component (optional)
    showIcon?: boolean; // Flag to control icon visibility
    onClick?: () => void; // Click handler (optional)
    className?: string; // Additional CSS classes (optional)
}
