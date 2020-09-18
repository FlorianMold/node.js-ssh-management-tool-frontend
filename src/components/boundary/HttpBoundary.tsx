import React, {ErrorInfo} from "react";
import * as logger from "../../util/Logger";

type HttpBoundaryProps = {
    children: any;
}

type HttpBoundaryState = {
    hasError: boolean;
}

export class HttpBoundary extends React.Component<HttpBoundaryProps, HttpBoundaryState> {
    state: HttpBoundaryState = {
        hasError: false
    };

    static getDerivedStateFromError(error: Error) {

        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        logger.error(error.message, error);
        logger.error(error.message, errorInfo);
        console.log('dere')

    }

    render() {
        if (this.state.hasError) {
            return <h1>Couldn't connect to backend. Refresh the site.</h1>;
        }

        return this.props.children;
    }
}