const Book = ({book}) => {
    const {
      bookName,
      author,
      image,
      tags,
      rating,
      category,
      yearOfPublishing,
    } = book;
    return (
      <div className="card bg-base-100 w-96 shadow p-5">
        <figure className="px-10 pt-10 bg-base-200 pb-10 rounded-xl">
          <img src={image} alt={bookName} className="rounded-xl h-48 w-44" />
        </figure>
        <div className="flex justify-between mt-3">
          <p className="font-bold text-xl">{category}</p>
          <p className="text-md font-bold border-2 p-1 border-lime-400 rounded-xl ">
            {yearOfPublishing}
          </p>
        </div>
        <div>
          <h2 className="card-title">{bookName}</h2>
          <p className="font-semibold mb-2">By: {author}</p>
          <hr />
          <div className="card-actions flex justify-between mt-3">
            <p className="text-xl font-bold">{tags[0]}</p>
            <p className="flex gap-1 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
              {rating}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Book;