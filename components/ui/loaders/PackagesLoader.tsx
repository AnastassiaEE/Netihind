import classNames from 'classnames';

export default function PackagesLoader() {
  const skeleton = (
    <div className="relative mb-5 w-full animate-pulse rounded-md bg-gray-100 last:mb-0">
      <div className="flex flex-wrap">
        <div className="max-lg:border-b-muted-light lg:border-r-muted-light w-full border px-8 py-5 lg:w-3/5">
          <div className="mb-5 space-y-1">
            {[
              ['w-16 h-10', 'mb-1'],
              ['w-8 h-2', 'mb-1'],
              ['w-44 h-2', ''],
            ].map(([size, margin], i) => (
              <div
                key={i}
                className={classNames(
                  size,
                  'rounded-md',
                  'bg-gray-300',
                  margin,
                )}
              ></div>
            ))}
          </div>
          <div className="flex gap-2">
            {['w-24 h-6', 'w-24 h-6', 'w-14 h-6'].map((size, i) => (
              <div
                key={i}
                className={classNames(size, 'rounded-md', 'bg-gray-300')}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-center px-1 py-5 lg:w-2/5">
          <div className="h-10 w-28 rounded-md bg-gray-300"></div>
        </div>
      </div>
      <div className="h-10 w-full rounded-b-md bg-gray-200"></div>
    </div>
  );
  return (
    <>
      {skeleton}
      {skeleton}
      {skeleton}
    </>
  );
}
