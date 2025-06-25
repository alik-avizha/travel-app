import { Component, type PropsWithChildren } from 'react'

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center text-red-500 mt-10">
          Что-то пошло не так.
        </div>
      )
    }
    return this.props.children
  }
}
