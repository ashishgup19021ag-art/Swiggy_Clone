export const RecomendedShimmer = () => {
  return (
    <div className="w-[95%] md:w-full border border-gray-200 rounded-2xl m-2 md:m-4 p-3 md:p-4 animate-pulse">

      {/* Heading */}
      <div className="flex w-full justify-center mb-5">

        <div className="w-[60%] h-6 md:h-7 bg-gray-200 rounded"></div>

        <div className="w-5 h-5 bg-gray-200 rounded ml-3 md:ml-5"></div>

      </div>


      {/* Food items */}
      {[1, 2, 3].map((item) => (

        <div
          key={item}
          className="flex w-full justify-center my-5 md:my-6"
        >

          <div className="flex w-full md:w-[70%] justify-between items-center gap-3">

            {/* Text */}
            <div className="w-[60%] md:w-[70%] min-w-0">

              {/* Food name */}
              <div className="h-5 w-[80%] md:w-48 bg-gray-200 rounded mb-3"></div>

              {/* Price */}
              <div className="h-4 w-16 md:w-20 bg-gray-200 rounded mb-3"></div>


              {/* Rating */}
              <div className="flex gap-2 mb-3">

                <div className="h-5 w-5 bg-gray-200 rounded-full"></div>

                <div className="h-4 w-10 bg-gray-200 rounded"></div>

                <div className="h-4 w-12 bg-gray-200 rounded"></div>

              </div>


              {/* Description */}
              <div className="h-4 w-[90%] bg-gray-200 rounded mb-2"></div>

              <div className="h-4 w-[70%] bg-gray-200 rounded"></div>

            </div>


            {/* Image */}
            <div className="w-[35%] md:w-[20%] shrink-0">

              <div className="w-full h-24 md:w-50 md:h-30 bg-gray-200 rounded-2xl">
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>
  )
}