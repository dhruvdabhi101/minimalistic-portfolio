export function useMDXComponents(components: any){
    return {h1: H1,h2: H2 , ...components}
}

export function H1({children}:any) {
    return (
        <h1 className="text-5xl text-white font-medium"> {children} </h1>
    )
}
export function H2({children}:any) {
    return (
        <h1 className="text-3xl text-white font-medium"> {children} </h1>
    )
}
