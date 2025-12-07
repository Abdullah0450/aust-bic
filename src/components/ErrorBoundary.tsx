import { ReactNode, Component, ErrorInfo } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="min-h-screen flex items-center justify-center bg-background px-6"
        >
          <div className="text-center max-w-md">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center"
            >
              <AlertTriangle className="w-10 h-10 text-destructive" />
            </motion.div>

            <h1 className="text-3xl font-heading font-bold mb-4 text-foreground">
              Oops! Something went wrong
            </h1>

            <p className="text-muted-foreground mb-8">
              We encountered an unexpected error. Please try refreshing the page or
              returning to the home page.
            </p>

            {this.state.error && (
              <div className="bg-muted/50 rounded-lg p-4 mb-8 text-left">
                <p className="text-xs text-muted-foreground font-mono break-words">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={this.handleReset}
              className="btn-primary inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Go to Home
            </motion.button>
          </div>
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
