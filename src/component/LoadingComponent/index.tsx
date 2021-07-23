import './LoadingComponent.scss';

interface LoadingComponentProps {
    loading?: boolean;
}

export const LoadingComponent: React.FC<LoadingComponentProps> = ({ loading, children }) => {
    return (
        <>
            {loading ? <div className="loader"></div> : children}
        </>
    )
}