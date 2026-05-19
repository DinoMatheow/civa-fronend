
interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {


    return (
    <div>
        <nav className="flex items-center gap-x-1 justify-center" aria-label="Pagination">
            <button type="button" className="btn btn-text">Anteriores </button>
            {
                Array.from({ length: totalPages}).map((_, index)=> (
                    <button 
                    key={index}
                    type="button" className="btn btn-text btn-square aria-[current='page']:text-bg-primary">1</button>
                )) 
            }
            <div className="flex items-center gap-x-1">
                <button type="button" className="btn btn-text btn-square aria-[current='page']:text-bg-primary" aria-current="page"> 2 </button>
                <button type="button" className="btn btn-text btn-square aria-[current='page']:text-bg-primary">3</button>
            </div>
            <button type="button" className="btn btn-text">Siguientes</button>
            </nav>
    </div>
    
    )
}