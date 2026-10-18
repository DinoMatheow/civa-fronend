import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "react-router";

interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') || '1';
    const page = isNaN(+queryPage) ? 1 : +queryPage;

    const handlePageChange = (newPage: number) => {
        if (page < 1 || page > totalPages) return;

        searchParams.set('page', newPage.toString());

        setSearchParams(searchParams);


    };

    return (
    <div>
        <nav className="flex items-center gap-x-1 justify-center" aria-label="Pagination">
            <button 
            type="button"
            className="btn btn-text"
             disabled={page === 1} 
            onClick={() => handlePageChange(page - 1)}
            >
               <ChevronLeft className="h-4 w-4" />
                Anteriores 
                </button>
           
            <div className="flex items-center gap-x-1">
                 {
                Array.from({ length: totalPages}).map((_, index)=> (
                    <button 
                    key={index}
                    className={`btn btn-square text-sm transition-colors 
                        ${
                        page === index + 1
                                        ? 'bg-[#381e59] hover:bg-[#2b1643] text-white border-none shadow-md font-bold' 
                                        : 'btn-text hover:bg-gray-100'
                                }`}
                    type="button" 
                    aria-current={index + 1 === page ? 'page' : undefined}
                   onClick={() => handlePageChange(index + 1)}
                    > { index + 1 } </button>
                )) 
            }
            </div>
            <button 
            type="button" className="btn btn-text" 
            disabled={page === totalPages} 
            onClick={() => handlePageChange(page + 1)}
            >Siguientes</button>
            </nav>
    </div>
    
    )
}