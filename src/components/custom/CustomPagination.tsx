
interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
    const page = 1 as number;

    return (
    <div>
        <nav className="flex items-center gap-x-1 justify-center" aria-label="Pagination">
            <button type="button" className="btn btn-text" disabled={page === 1} >Anteriores </button>
           
            <div className="flex items-center gap-x-1">
                 {
                Array.from({ length: totalPages}).map((_, index)=> (
                    <button 
                    key={index}
                    className={`btn btn-text btn-square ${index + 1 === page ? 'aria-[current="page"]:text-bg-primary' : ''}`}
                    type="button" 
                    aria-current={index + 1 === page ? 'page' : undefined}
                    > { index + 1 } </button>
                )) 
            }
                {/* <button type="button" className="btn btn-text btn-square aria-[current='page']:text-bg-primary" aria-current="page"> 2 </button> */}
                {/* <button type="button" className="btn btn-text btn-square aria-[current='page']:text-bg-primary">3</button> */}
            </div>
            <button type="button" className="btn btn-text" disabled={page === totalPages} >Siguientes</button>
            </nav>
    </div>
    
    )
}