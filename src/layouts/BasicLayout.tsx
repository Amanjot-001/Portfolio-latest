const BasicLayout = ({children}: any) => {
    return (
        <div className="md:h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default BasicLayout;
