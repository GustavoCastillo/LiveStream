
const Pagination = ({ page, maxPage, onPageChange}) => {
  return (
    <div className="flex justify-center mt-6">
    <button onClick={()=> onPageChange(page - 1)} disabled={page === 1} className="px-4 py-2 mr-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50" >
      Previous
    </button>
    <span className="text-lg font-semibold">
      {page}/{ maxPage}
    </span>
    <button onClick={()=> onPageChange(page + 1)} disabled={page === maxPage} className="px-4 py-2 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">
      Next
    </button>
  </div>
  );
};

export default Pagination;
