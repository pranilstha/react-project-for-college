import "./BookList.css";
import { useEffect, useState } from "react";
function BookList() {
  const [booksData, setBooksData] = useState([]);
  const url =
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAG49waOb1U4ZHquhnBQt_MEyF8pxJrPts";
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBooksData(data.items);
    };

    getData();
  }, []);
  return (
    <>
      <div className="content flex gap-3 flex-wrap ms-9">
        {booksData &&
          booksData.map((book) => {
            const { volumeInfo } = book;
            const { authors,imageLinks } = volumeInfo;
            return (
              <div className="border single">
                <img src={imageLinks?.thumbnail}></img>
                <p>{volumeInfo.title}</p>
                <p>By : {
                    authors?.map((author)=>{
                        return <span className="text-green-700">{author},</span>
                    })
          }</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default BookList;
