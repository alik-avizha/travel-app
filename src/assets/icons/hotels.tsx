import type { SVGProps, Ref } from 'react'
import { forwardRef, memo } from 'react'

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M25 13.5V15c0 4.714 0 7.071-1.465 8.535C22.072 25 19.714 25 15 25s-7.071 0-8.536-1.465C5 22.072 5 19.714 5 15s0-7.071 1.464-8.536C7.93 5 10.286 5 15 5h1.5"
    />
    <circle cx={22} cy={8} r={3} stroke="currentColor" strokeWidth={1.5} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 17h9m-9 3.5h6"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const HotelsIcon = memo(ForwardRef)
