const BackButton = ({ value, onClick }) => {
  return (
    <div className="my-tailwindcss">
      <div className="flex flex-col gap-6 mb-6">
        {
          // 如果当前不是在 /README.md 页面，则显示返回按钮
          value !== '/README.md' && (
            <button
              type="button"
              onClick={onClick}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <svg
                className="mr-1.5 -ml-0.5 size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
              回到 README.md
            </button>
          )
        }
      </div>
    </div>
  )
}

export default BackButton
