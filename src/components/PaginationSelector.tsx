import { Pagination } from "./ui/pagination";

type Props = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void;

};

const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++){
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
};

export default PaginationSelector;