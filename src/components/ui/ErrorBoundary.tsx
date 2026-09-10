import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return <div className="fallback">Something went wrong. Please refresh.</div>
    }

    return this.props.children
  }
}
