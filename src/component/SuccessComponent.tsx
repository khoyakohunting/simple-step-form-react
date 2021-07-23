export const SuccessComponent = (props: any) => {
    return (
        <>
            <div>User Created Successfully</div>
            <a href="/" onClick={() => window.location.reload()}>Create Another</a>
        </>
    )
}

export default SuccessComponent;