import { CSSProperties } from 'react'

interface StackProps {
  direction: 'row' | 'column'
  wrap: boolean
  spacing: number
  children: number
  numberOfChildren: number
}
const Stack = ({ children, spacing = 2, direction = "row", wrap = false }: StackProps) => {
    const customStyle : CSSProperties = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction
      }

    return ( 
        <div style={customStyle}>{children}</div>
     );
}


export default Stack;