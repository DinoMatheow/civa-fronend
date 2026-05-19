
interface Props {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const CustomPagination = ({ totalPages, currentPage = 0, onPageChange }: Props) => {

    return (
    <div>
        <nav className="flex items-center gap-x-1 justify-center" aria-label="Pagination">
            <button 
            type="button" className="btn btn-text"
             disabled={currentPage === 0} 
            onClick={() => onPageChange(currentPage - 1)}
            >Anteriores </button>
           
            <div className="flex items-center gap-x-1">
                 {
                Array.from({ length: totalPages}).map((_, index)=> (
                    <button 
                    key={index}
                    className={`btn btn-square text-sm transition-colors 
                        ${
                        index  === currentPage 
                                        ? 'bg-[#381e59] hover:bg-[#2b1643] text-white border-none shadow-md font-bold' 
                                        : 'btn-text hover:bg-gray-100'
                                }`}
                    type="button" 
                    aria-current={index + 1 === currentPage ? 'page' : undefined}
                   onClick={() => onPageChange(index)}
                    > { index + 1 } </button>
                )) 
            }
            </div>
            <button 
            type="button" className="btn btn-text" 
            disabled={currentPage === totalPages} 
            onClick={() => onPageChange(currentPage + 1)}
            >Siguientes</button>
            </nav>
    </div>
    
    )
}