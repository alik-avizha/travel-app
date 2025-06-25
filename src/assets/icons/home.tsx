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
    viewBox="0 0 30 30"
    fill="none"
    ref={ref}
    {...props}
  >
    <mask
      id="b"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={30}
      height={30}
      style={{
        maskType: 'alpha',
      }}
    >
      <rect fill="white" width={30} height={30} />
    </mask>
    <g mask="url(#b)">
      <path fill="currentColor" d="M15 5L5 15h3v7h5v-5h4v5h5v-7h3L15 5z" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const HomeIcon = memo(ForwardRef)
